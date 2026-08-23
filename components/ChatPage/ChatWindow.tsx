"use client";

import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatHistory from "./ChatHistory";
import ChatHeader from "./ChatHeader";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm StudyPal, your AI study companion. How can I assist you today?"
    }
  ]);

  const handleSendMessages = async (input: string) => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        role: "user",
        content: input
      }
    ]);

    // Fetch the AI response from the backend

    try {
      const aiResponse = await fetch("http://localhost:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: input })
      });

      const aiData = await aiResponse.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: aiData.answer
        }
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return;
    }
  };

  return (
    <div className="flex h-screen flex-1 flex-col gap-3 bg-[radial-gradient(circle_at_top, rgba(251,191,36,0.10),_transparent_24%),linear-gradient(180deg,_#0f172a_0%,_#111827_100%)] p-4">
      {/* <ChatHeader /> */}
      <ChatHistory messages={messages} />
      <ChatInput onSend={handleSendMessages} />
    </div>
  );
}
