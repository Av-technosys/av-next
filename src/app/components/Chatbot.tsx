'use client';
import { useState } from 'react';

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
    <div className="fixed bottom-4 right-4 w-80 rounded-xl border bg-white shadow-lg">
      <div className="border-b p-3 font-semibold">AV Technosys Chat</div>

      <div className="h-64 space-y-2 overflow-y-auto p-3 text-sm">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : ''}>
            <span
              className={`inline-block rounded px-2 py-1 ${
                m.role === 'user' ? 'bg-black text-white' : 'bg-gray-200'
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}
        {loading && <div>Typing…</div>}
      </div>

      <div className="flex gap-2 border-t p-2">
        <input
          className="flex-1 rounded border px-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something…"
        />
        <button
          onClick={send}
          className="rounded bg-black px-3 text-sm text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
