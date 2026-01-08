'use client';
import { useState } from 'react';
import { MessageBubble } from './MessageBubble';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input) return;
    setMessages((m) => [...m, { role: 'user', text: input }]);
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages((m) => [...m, { role: 'bot', text: data.answer }]);
    setInput('');
    setLoading(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex h-[520px] w-[420px] flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl">
      {/* Header */}
      <div className="border-b px-5 py-4 text-base font-semibold">
        AV Technosys Chat
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
        {messages.map((m, i) => (
          <MessageBubble
            key={i}
            role={m.role as "user" | "bot"}
            text={m.text}
          />
        ))}
        {loading && (
          <div className="text-xs text-gray-400">Assistant is typing…</div>
        )}
      </div>

      {/* Input */}
      <div className="border-t px-4 py-3 flex gap-2">
        <input
          className="flex-1 rounded-xl border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something…"
        />
        <button
          onClick={send}
          className="rounded-xl bg-black px-5 py-2 text-sm text-white"
        >
          Send
        </button>
      </div>
    </div>

  );
}


function Message({ text, role }: { text: string; role: "user" | "bot" }) {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] whitespace-pre-wrap rounded-lg px-3 py-2 leading-relaxed ${role === "user"
          ? "bg-black text-white"
          : "bg-gray-100 text-gray-900"
          }`}
      >
        {text}
      </div>
    </div>
  );
}
