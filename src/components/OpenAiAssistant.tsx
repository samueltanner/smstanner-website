"use client"

import Image from "next/image"
import { AssistantStream } from "openai/lib/AssistantStream"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Markdown from "react-markdown"

interface Message {
  id: string
  role: string
  content: string
  createdAt: Date
}

export default function OpenAIAssistant({
  assistantId = "",
  greeting = "I am a GPT Assistant Trained on Sam! What can I help you with? I am trained on Sam but I can't guarantee I'm always correct.",
  showAssistant,
}: {
  assistantId?: string
  greeting?: string
  showAssistant: boolean
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [threadId, setThreadId] = useState<string | null>(null)
  const [prompt, setPrompt] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [streamingMessage, setStreamingMessage] = useState<Message>({
    id: "Thinking...",
    role: "assistant",
    content: "_Thinking..._",
    createdAt: new Date(),
  })
  const messageId = useRef(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const greetingMessage = {
    id: "greeting",
    role: "assistant",
    content: greeting,
    createdAt: new Date(),
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Enter") {
        if (prompt !== "" && !!prompt) handleSubmit()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  })

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus()
    }
  }, [isLoading])

  useEffect(() => {
    contentRef.current?.scrollTo({
      top: contentRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [messages, isLoading, streamingMessage.content])

  async function handleSubmit() {
    setStreamingMessage({
      id: "Thinking...",
      role: "assistant",
      content: "_Thinking..._",
      createdAt: new Date(),
    })

    setIsLoading(true)

    messageId.current++
    setMessages([
      ...messages,
      {
        id: messageId.current.toString(),
        role: "user",
        content: prompt,
        createdAt: new Date(),
      },
    ])
    setPrompt("")

    const response = await fetch("/api/openai-assistant", {
      method: "POST",
      body: JSON.stringify({
        assistantId: assistantId,
        threadId: threadId,
        content: prompt,
      }),
    })

    if (!response.body) {
      return
    }
    const runner = AssistantStream.fromReadableStream(response.body)

    runner.on("messageCreated", (message) => {
      setThreadId(message.thread_id)
    })

    runner.on("textDelta", (_delta, contentSnapshot) => {
      const newStreamingMessage = {
        ...streamingMessage,
        content: contentSnapshot.value,
      }
      setStreamingMessage(newStreamingMessage)
    })

    runner.on("messageDone", (message) => {
      const finalContent =
        message.content[0].type == "text" ? message.content[0].text.value : ""

      messageId.current++
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: messageId.current.toString(),
          role: "assistant",
          content: finalContent,
          createdAt: new Date(),
        },
      ])

      setIsLoading(false)
    })

    runner.on("error", (error) => {
      console.error(error)
    })
  }

  function handlePromptChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPrompt(e.target.value)
  }

  return showAssistant ? (
    <div className="relative flex max-w-[800px] lg:mt-20 lg:w-1/2 lg:justify-center">
      <div
        className="flex h-full flex-col gap-8 overflow-y-auto pb-16"
        ref={contentRef}
      >
        <div className="flex flex-col gap-8">
          <OpenAIAssistantMessage message={greetingMessage} />
          {messages.map((m) => (
            <OpenAIAssistantMessage key={m.id} message={m} />
          ))}
        </div>
        {isLoading && <OpenAIAssistantMessage message={streamingMessage} />}
      </div>
      <div className="absolute bottom-0 mt-8 flex w-full bg-[#F6F6F6] font-mono">
        <input
          disabled={isLoading}
          autoFocus
          className="w-full border-b-4 border-black bg-inherit selection:bg-red-500 selection:text-[#F6F6F6] focus:outline-none focus:ring-0"
          onChange={handlePromptChange}
          value={prompt}
          placeholder="ask away!"
          ref={inputRef}
        />
        <motion.button
          disabled={prompt.length == 0 || isLoading}
          initial={{
            color: "#000",
            border: "4px solid",
            position: "relative",
            padding: "0.25em 0.75em",
          }}
          whileHover={{
            boxShadow:
              "1px 1px 0px 0px #ef4444, 2px 2px 0px 0px #ef4444, 3px 3px 0px 0px #ef4444, 4px 4px 0px 0px #ef4444, 5px 5px 0px 0px #ef4444",
            transform: "translate(-5px, -5px)",
            transition: { duration: 0.1 },
          }}
          whileTap={{
            boxShadow: "none",
            transition: { duration: 0.1 },
            transform: "translate(0px, 0px)",
          }}
          onTap={() => {
            if (prompt !== "" && !!prompt) handleSubmit()
          }}
        >
          {isLoading ? "Sent" : "Send"}
        </motion.button>
      </div>
    </div>
  ) : (
    <></>
  )
}

export function OpenAIAssistantMessage({ message }: { message: Message }) {
  function displayRole(roleName: string) {
    switch (roleName) {
      case "user":
        return (
          <span className="relative flex size-8 flex-shrink-0 items-center justify-center self-center border-4 border-black font-mono font-bold">
            <p className="mt-0.5">U</p>
          </span>
        )
      case "assistant":
        return (
          <span className="relative flex h-full w-10 self-center">
            <Image
              src="/images/sam-just-head.svg"
              height={40}
              width={40}
              alt="Sam.ai"
            />
          </span>
        )
    }
  }
  return (
    <div
      className={`flex gap-2 ${
        message.role === "user" ? "flex-row-reverse" : ""
      }`}
    >
      <div className="">{displayRole(message.role)}</div>
      <div
        className={`mx-4 overflow-auto pt-2 font-mono ${
          message.role === "user" ? "text-right" : "text-left"
        }`}
      >
        <Markdown>{message.content}</Markdown>
      </div>
    </div>
  )
}
