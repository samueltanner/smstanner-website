// app/api/openai-assistant/route.ts
import { NextRequest } from "next/server";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const instructionsPath = path.join(process.cwd(), "src", "utils", "instructions.txt");
const instructions = fs.readFileSync(instructionsPath, "utf-8");

export async function POST(request: NextRequest) {
  const { content, messages } = await request.json();

  if (!content) return new Response("Missing content", { status: 400 });

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

  const stream = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [
      ...messages,
      {
        role: "user",
        content,
      },
    ],
    instructions,
    stream: true,
  });

  const body =
    typeof (stream as any).toReadableStream === "function"
      ? (stream as any).toReadableStream()
      : (stream as unknown as ReadableStream);

  return new Response(body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
