"use client"
import AvatarImage from "@/components/AvatarImage"
import NavBar from "@/components/NavBar"
import OpenAIAssistant from "@/components/OpenAiAssistant"
import ResumeCard from "@/components/ResumeCard"
import useAppContext from "@/utils/AppContext"
import { projects, resume } from "@/utils/constants"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import ProjectsSubHeader from "@/components/ProjectsSubHeader"
import ProjectCard from "@/components/ProjectCard"
import { useRouter } from "next/navigation"
import TabSidebar from "@/components/TabSidebar"
import AboutTab from "@/views/AboutTab"
import MainTab from "@/views/MainTab"
import ResumeTab from "@/views/ResumeTab"
import ProjectsTab from "@/views/ProjectsTab"

export default function Home() {
  const screenRef = useRef<HTMLDivElement>(null)
  const [showAssistant, setShowAssistant] = useState(false)
  const { selectedTab } = useAppContext()
  const router = useRouter()

  useEffect(() => {
    if (selectedTab !== "main") {
      setShowAssistant(false)
    }

    if (selectedTab === "main") {
      router.push("/#main")
    }
  }, [selectedTab, router])

  return (
    <div
      ref={screenRef}
      className="relative flex h-full w-full flex-col items-center gap-0 overflow-hidden"
    >
      <div className="flex h-fit w-full">
        <NavBar />
      </div>
      <div className="mt-16 flex min-h-0 w-full flex-grow justify-center">
        {selectedTab === "main" && (
          <MainTab
            showAssistant={showAssistant}
            setShowAssistant={setShowAssistant}
          />
        )}
        {selectedTab === "about" && <AboutTab />}
        {selectedTab === "projects" && <ProjectsTab />}
        {selectedTab === "resume" && <ResumeTab />}
      </div>
      <div className="absolute bottom-0 left-0 flex h-72 min-h-72 w-full 3xtall:relative">
        <AvatarImage ref={screenRef} />
      </div>
    </div>
  )
}
