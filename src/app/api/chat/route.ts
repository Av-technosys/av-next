import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Pinecone } from '@pinecone-database/pinecone';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const pc = new Pinecone({ apiKey: process.env.PINECORN! });
const index = pc.index('av-chatbot-index');

export async function POST(req: Request) {
  const { message } = await req.json();

  // 1. Embed query
  const embedding = await openai.embeddings.create({
    model: 'text-embedding-3-large',
    input: message,
  });

  // 2. Search Pinecone
  const search = await index.query({
    vector: embedding.data[0].embedding,
    topK: 5,
    includeMetadata: true,
  });

  const context = search.matches
    .map((m) => m.metadata?.body || '')
    .join('\n\n');

  // 3. Ask LLM
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.2,
    messages: [
      {
        role: 'system',
        content:
          // 'You are an AV Technosys website assistant name AVA. Answer ONLY from context. If missing, say you don’t know.',
          'You are an AV Technosys website assistant name AVA. Get the answer from the context . If missing then tell any general information and keep the replies short',
      },
      {
        role: 'user',
        content: `Context:\n${context}\n\nQuestion:\n${message}`,
      },
    ],
  });

  return NextResponse.json({
    answer: completion.choices[0].message.content,
  });
}
