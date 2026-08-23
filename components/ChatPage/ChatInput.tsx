"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Cpu, Globe, Sparkles } from "lucide-react";

export default function ChatInput({ onSend }: { onSend: (message: string) => void }) {
  const [input, setInput] = useState("");
  const [provider, setProvider] = useState<"online" | "offline">("online");
  const [selectedModel, setSelectedModel] = useState("");
  const [models, setModels] = useState({
    online: [""],
    offline: [""]
  });

  useEffect(() => {
    let isMounted = true;

    const loadModels = async () => {
      console.log("Fetching models from backend...");
      try {
        const response = await fetch("http://localhost:8000/chat/models");
        console.log("Response status:");
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const modelsData = await response.json();

        console.log("Fetched models:", modelsData);

        if (!isMounted) return;

        setModels({
          online: modelsData.online,
          offline: modelsData.offline
        });
        setSelectedModel(modelsData.online?.[0] ?? "");
      } catch (error) {
        console.error("Error fetching models:", error);

        if (!isMounted) return;

        const fallbackModels = {
          online: ["gpt-3.5-turbo", "gpt-4"],
          offline: ["local-gpt-vicuna-13b"]
        };

        setModels(fallbackModels);
        setSelectedModel(fallbackModels.online[0]);
      }
    };

    void loadModels();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleProviderChange = (newProvider: "online" | "offline") => {
    setProvider(newProvider);
    setSelectedModel(models[newProvider][0]);
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  const handleKeyCapture = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.shiftKey) return;
      handleSubmit();
    }
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.38)] backdrop-blur-xl">
      <div className="mb-3 flex items-center gap-2 text-sm text-slate-400">
        <Sparkles size={16} className="text-amber-300" />
        Ask a question, paste notes, or switch model before sending.
      </div>

      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex flex-1 items-center rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2">
          <input
            type="text"
            placeholder="Ask something about your topic..."
            value={input}
            onKeyDown={(e) => handleKeyCapture(e)}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent px-2 py-2 text-slate-100 outline-none placeholder:text-slate-500"
          />

          <button
            onClick={handleSubmit}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
            disabled={!input.trim()}
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[360px] lg:justify-end">
          <div className="flex rounded-2xl border border-white/10 bg-slate-950/70 p-1">
            <button
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition ${
                provider === "online"
                  ? "bg-amber-400 font-semibold text-slate-950"
                  : "text-slate-300 hover:text-white"
              }`}
              onClick={() => handleProviderChange("online")}
            >
              <Globe size={16} />
              Online
            </button>

            <button
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition ${
                provider === "offline"
                  ? "bg-amber-400 font-semibold text-slate-950"
                  : "text-slate-300 hover:text-white"
              }`}
              onClick={() => handleProviderChange("offline")}
            >
              <Cpu size={16} />
              Offline
            </button>
          </div>

          <div className="flex items-center rounded-2xl border border-white/10 bg-slate-950/70 px-3">
            <select
              className="w-full bg-transparent px-2 py-3 text-sm text-slate-100 outline-none"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              {models[provider].map((model) => (
                <option key={model} value={model} className="bg-slate-900 text-slate-100">
                  {model}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
