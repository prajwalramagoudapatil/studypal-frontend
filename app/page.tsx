"use client";

import ChatWindow from "@/components/ChatPage/ChatWindow";
import SideNav from "@/components/Sidebar/SideNav";

export default function Home() {
  return (
    <main className="flex flex-row h-screen bg-slate-950 text-slate-100">
      <SideNav />
      <div className="flex min-w-0 flex-1 flex-col">
        <ChatWindow />
      </div>
    </main>
  );
}
