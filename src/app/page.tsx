"use client"
import AvatarImage from "@/components/AvatarImage"
import NavBar from "@/components/NavBar"
import useAppContext from "@/utils/AppContext"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
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
      <div className="h-fit w-full lg:flex">
        <NavBar />
      </div>
      <div className="mt-8 flex min-h-0 w-full flex-grow justify-center lg:mt-16">
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
      <div className="bottom-0 left-0 flex h-36 min-h-36 w-full lg:h-72 lg:min-h-72 3xtall:relative">
        <AvatarImage ref={screenRef} />
      </div>
    </div>
  )
}
