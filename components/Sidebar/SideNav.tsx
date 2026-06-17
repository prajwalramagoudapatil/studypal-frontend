import {
  LuBookOpen,
  LuChevronRight,
  LuMessageSquare,
  LuPlus,
  LuSearch,
  LuSettings,
  LuUpload,
} from "react-icons/lu";

const recentChats = [
  "Machine Learning Notes",
  "DBMS Previous Papers",
  "Operating System Quiz",
];

export default function SideNav() {
   return (
    <aside className="flex  w-72 shrink-0 flex-col border-r border-slate-800 bg-[linear-gradient(180deg,_#07111f_0%,_#0f172a_45%,_#111827_100%)] text-slate-100">
      <div className="border-b border-slate-800 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300 ring-1 ring-amber-300/20">
            <LuBookOpen size={20} />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">
              StudyPal
            </p>
            <p className="text-xs text-slate-400">
              Focused study workspace
            </p>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-2 px-4 py-4">
        <button className="flex items-center gap-3 rounded-2xl bg-amber-400 px-4 py-3 font-medium text-slate-950 shadow-[0_10px_30px_rgba(251,191,36,0.22)] transition hover:bg-amber-300">
          <LuPlus size={18} />
          New Chat
        </button>

        <button className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white">
          <LuSearch size={18} />
          Search Chats
        </button>

        <button className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white">
          <LuUpload size={18} />
          Upload Documents
        </button>
      </nav>

      <div className="px-4 pb-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Today&apos;s Goal
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-200">
            Revise smarter with quicker access to your recent topics and study files.
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Recent Chats
          </h2>
          <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-slate-400">
            {recentChats.length}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          {recentChats.map((chat) => (
            <button
              key={chat}
              className="group flex items-center gap-3 rounded-2xl px-3 py-3 text-left text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/80 text-slate-300 transition group-hover:bg-slate-700">
                <LuMessageSquare size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{chat}</p>
                <p className="text-xs text-slate-500">Open conversation</p>
              </div>
              <LuChevronRight
                size={16}
                className="text-slate-500 transition group-hover:text-slate-300"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800 p-4">
        <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white">
          <LuSettings size={18} />
          Settings
        </button>
      </div>
    </aside>
  );

}
