import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"
import fs from "fs"
import path from "path"

const instructionsPath = path.join(
  process.cwd(),
  "src",
  "utils",
  "instructions.txt"
)
const instructions = fs.readFileSync(instructionsPath, "utf-8")

export async function POST(request: NextRequest) {
  const newMessage = await request.json()

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  if (newMessage.threadId == null) {
    const thread = await openai.beta.threads.create()
    newMessage.threadId = thread.id
  }

  await openai.beta.threads.messages.create(newMessage.threadId, {
    role: "user",
    content: newMessage.content,
  })

  const stream = await openai.beta.threads.runs.create(newMessage.threadId, {
    assistant_id: process.env.ASSISTANT_ID as string,
    instructions: instructions,
    stream: true,
  })

  return new Response(stream.toReadableStream())
}
