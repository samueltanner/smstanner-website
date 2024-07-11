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
import ProjectsSidebar from "@/components/ProjectsSidebar"
import ProjectCard, { Project } from "@/components/ProjectCard"
import { useRouter } from "next/navigation"

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
  }, [selectedTab])

  return (
    <div
      ref={screenRef}
      className="relative flex h-full w-full flex-col items-center gap-0 overflow-hidden"
    >
      <div className="flex h-fit w-full">
        <NavBar />
      </div>
      <div className="mt-16 flex min-h-0 w-full flex-grow justify-center">
        {selectedTab === "main" && MainTab({ showAssistant, setShowAssistant })}
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
const MainTab = ({
  showAssistant,
  setShowAssistant,
}: {
  showAssistant: boolean
  setShowAssistant: (val: boolean) => void
}) => {
  return (
    <>
      {!showAssistant && (
        <div className="flex h-full w-1/2 max-w-[720px] flex-col justify-center gap-4 overflow-y-scroll font-mono">
          <p className="">Heyyo! My name is Sam Tanner.</p>
          <p>
            I am an engineer but I wear a lot of hats (figuratively and
            literally).
          </p>
          <p>
            My biggest passion in life is building things. I&apos;ve built apps
            for dairy farmers, cookware, chocolate companies, and a whole lot
            else in between.
          </p>
          <div className="mt-8 flex w-full items-center justify-center">
            <motion.button
              initial={{
                color: "#000",
                border: "4px solid",
                position: "relative",
                padding: "0.25em 0.75em",
              }}
              whileHover={{
                boxShadow:
                  "1px 1px 0px 0px #ef4444, 2px 2px 0px 0px #ef4444, 3px 3px 0px 0px #ef4444, 4px 4px 0px 0px #ef4444, 5px 5px 0px 0px #ef4444",
                transition: { duration: 0.1 },
                transform: "translate(-4px, -5px)",
              }}
              whileTap={{
                boxShadow: "none",
                transform: "translate(0px, 0px)",
                transition: { duration: 0.1 },
              }}
              onTap={() => {
                setShowAssistant(true)
              }}
              className="font-semibold"
            >
              Ask Me A Question*
            </motion.button>
          </div>
          <span className="flex w-full items-center justify-center">
            <p className="text-sm">*Powered by Skynet</p>
          </span>
        </div>
      )}

      <OpenAIAssistant showAssistant={showAssistant} />
    </>
  )
}

const ResumeTab = () => {
  return (
    <div className="relative flex w-1/2 max-w-[800px] flex-col gap-4 overflow-y-auto font-mono">
      <hr className="sticky top-0 w-full border-2 border-black" />
      {resume.map((r, i) => (
        <ResumeCard key={i} {...r} />
      ))}
      <hr className="sticky bottom-0 w-full border-2 border-black" />
    </div>
  )
}

const ProjectsTab = () => {
  const projectTitles = projects.map((p) => p.title)
  const [selectedProject, setSelectedProject] = useState<string>("ObjectVision")

  useEffect(() => {
    const projectCard = document.getElementById(selectedProject)
    projectCard?.scrollIntoView({ behavior: "smooth" })
  }, [selectedProject])

  return (
    <div className="relative flex w-full flex-col items-center gap-8 overflow-hidden p-6 font-mono">
      <div className="absolute flex w-full max-w-[800px]">
        <ProjectsSubHeader />
      </div>

      <div className="relative mt-28 flex w-full justify-center gap-8 overflow-y-auto">
        <span className="mt-4 flex w-fit">
          <ProjectsSidebar
            projectTitles={projectTitles}
            selectedProject={selectedProject}
            setSelectedProject={(p) => setSelectedProject(p)}
          />
        </span>
        <div className="relative flex w-3/4 flex-col gap-4 overflow-y-auto px-4">
          <hr className="sticky top-0 w-full border-2 border-black" />
          {projects.map((p, i) => (
            <ProjectCard project={p} key={i} id={p.title} />
          ))}
          <hr className="sticky bottom-0 w-full border-2 border-black" />
        </div>
      </div>
    </div>
  )
}

const AboutTab = () => {
  return (
    <div className="flex min-h-0 w-1/2 max-w-[800px] flex-col gap-4 overflow-y-auto p-6 font-mono">
      <p className="">
        My career (and life) has been pretty darn fun up to this point!
      </p>
      <p>
        I&apos;ve worked at a few startups, a few bigger companies, and even
        started a company or three of my own. My most defining roles have been
        the ones where I can learn very quickly with a high level of autonomy,
        and with a team of very smart, creative, and diverse people.
      </p>
      <p>
        The reason I became an engineer was because I needed a CRM & ERP (fancy
        terms for software that tracks sales and materials) for my chocolate
        company. We were producing hundreds of pounds of chocolate per day and
        shipping to REI, Nordstrom, and Whole Foods locations across the
        country. I tried a bunch of out-of-the-box solutions (even got in a
        legal spat trying to get out of one of those &ldquo;solutions&ldquo;)
        and none of them worked quite right. So I decided to build my own. In
        doing so, I discovered relational databases. To say that changed my life
        is a bit of an understatement.
      </p>
      <p>
        I left my chocolate company to learn how to code and I have been doing
        that ever since. I&apos;ve worked on a lot of different projects, but
        the ones that I am most proud of are the ones that have a direct impact
        on people&apos;s lives. I&apos;ve built software that helps dairy
        farmers track their cows&apos; diets, apps that help small businesses
        automate their bookkeeping with AI, and systems that help multinational
        organizations protect their datastores from bad actors.
      </p>
      <p>
        The thing that makes me most unique as a developer is the fact that I
        have sat at three different seats at the proverbial table: I&apos;ve
        been a CEO of growing companies. I&apos;ve been a digital designer. And
        I&apos;ve been a dev. My less than linear path has given me the tools to
        understand problems and communicate answers in ways that most people
        can&apos;t.
      </p>
      <p>
        But thats enough about work stuff. If you want more, check out my
        resume!
      </p>
      <p>
        I live in Bend, Oregon with my wife, Tess, and our dog Mark. We love to
        hike, cook, and travel together. We moved to Bend in 2022 to get closer
        to the mountains and the sun. And boy oh boy has this place delivered!
      </p>
      <p>
        If you want to get in touch, shoot me an email at{" "}
        <a href="mailto:me@smstanner.com">me@smstanner.com</a>. Talk to you
        soon!
      </p>
      <p>-Sam</p>
    </div>
  )
}
