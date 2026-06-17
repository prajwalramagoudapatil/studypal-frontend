import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

type ChatHistoryProps = {
  messages: {
    role: "user" | "assistant";
    content: string;
  }[];
};

export default function ChatHistory({ messages }: ChatHistoryProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/55 shadow-[0_24px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
          Conversation
        </p>
        <p className="mt-1 text-sm text-slate-400">
          Responses stay organized here while the latest message auto-scrolls into view.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5 md:px-5">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.content}
            sender={msg.role === "user" ? "user" : "assistant"}
          />
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
