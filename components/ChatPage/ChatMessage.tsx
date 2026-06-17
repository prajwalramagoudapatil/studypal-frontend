import ReactMarkdown from "react-markdown";
import { LuBot, LuUserRound } from "react-icons/lu";

type ChatMessageProps = {
  message: string;
  sender: "user" | "assistant";
};

export default function ChatMessage({
  message,
  sender,
}: ChatMessageProps) {
  const isUser = sender === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex max-w-[85%] items-start gap-3 md:max-w-[78%] ${isUser ? "flex-row-reverse" : ""}`}
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1 ${
            isUser
              ? "bg-amber-400 text-slate-950 ring-amber-300/30"
              : "bg-slate-800 text-amber-300 ring-white/10"
          }`}
        >
          {isUser ? <LuUserRound size={18} /> : <LuBot size={18} />}
        </div>

        {isUser ? (
          <div className="rounded-[24px] rounded-tr-md bg-amber-400 px-4 py-3 text-sm leading-7 text-slate-950 shadow-[0_12px_30px_rgba(251,191,36,0.18)]">
            {message}
          </div>
        ) : (
          <div className="prose prose-sm max-w-none rounded-[24px] rounded-tl-md border border-white/10 bg-slate-950/75 px-4 py-3 text-slate-100 shadow-[0_16px_45px_rgba(15,23,42,0.28)] prose-p:text-slate-200 prose-strong:text-white prose-code:text-amber-300">
            <ReactMarkdown>{message}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
