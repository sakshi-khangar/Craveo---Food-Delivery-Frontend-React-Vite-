import React, { useState } from "react";
import "../assets/css/Chatbot.css";

const INITIAL_MESSAGES = [
  { from: "bot", text: "Hi there! 👋 What are you in the mood for today?" },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text: trimmed },
      { from: "bot", text: "Let me find some tasty options for you! 🍽️" },
    ]);
    setInput("");
  };

  return (
    <div className="chatbot-root">
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span className="chatbot-avatar">🤖</span>
            <div>
              <p className="chatbot-title">Craveo AI Assistant</p>
              <p className="chatbot-status">Online</p>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-bubble ${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            />
            <button onClick={() => sendMessage(input)} aria-label="Send">
              ➤
            </button>
          </div>
        </div>
      )}

      <button className="chatbot-fab" onClick={() => setOpen((o) => !o)}>
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}