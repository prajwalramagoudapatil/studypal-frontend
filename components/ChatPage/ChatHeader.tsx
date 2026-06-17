import { LuBell, LuBookMarked, LuSparkles } from "react-icons/lu";

export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between rounded-[28px] border border-white/10 bg-slate-900/70 px-5 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.38)] backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300 ring-1 ring-amber-300/20">
          <LuBookMarked size={22} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold tracking-tight text-white">
              Study Session
            </h1>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Active
            </span>
          </div>
          <p className="text-sm text-slate-400">
            Ask, revise, and explore your notes with AI support.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 md:flex">
          <LuSparkles size={16} className="text-amber-300" />
          Smart study mode
        </div>
        <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white">
          <LuBell size={18} />
        </button>
      </div>
    </header>
  );
}
