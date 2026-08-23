
"use client";

import ChatWindow from "@/components/ChatPage/ChatWindow";
import SideNav from "@/components/Sidebar/SideNav";

export default function Home() {
  return (
    <>
     <div className="flex h-screen bg-slate-950 text-slate-100">
      <button onClick={() => {window.location.href = "/chat"}} className="bg-blue-500 text-white px-4 py-2 rounded m-auto">
        Login to Chat
      </button>
      </div>
    </>
  );
}
