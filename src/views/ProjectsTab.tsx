import ProjectCard from "@/components/ProjectCard"
import ProjectsSubHeader from "@/components/ProjectsSubHeader"
import TabSidebar from "@/components/TabSidebar"
import { projects } from "@/utils/constants"
import { useEffect, useRef, useState } from "react"

const ProjectsTab = () => {
  const projectTitles = projects.map((p) => p.title)
  const [selectedProject, setSelectedProject] = useState<string>("ObjectVision")
  const containerRef = useRef<HTMLDivElement>(null)
  const sidebarScroll = useRef(false)
  const topHrRef = useRef<HTMLHRElement>(null)

  const handleSidebarClick = (project: string) => {
    sidebarScroll.current = true
    setSelectedProject(project)
    const card = document.getElementById(project)
    card?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScrollEnd = () => {
      sidebarScroll.current = false
      if (!selectedProject) {
        const container = containerRef.current
        const cards = container?.querySelectorAll(".project-card")
        for (const card of cards!) {
          if (
            card.getBoundingClientRect().top >
            topHrRef.current?.getBoundingClientRect().top!
          ) {
            setSelectedProject(card.id)
            return
          }
        }
      }
    }

    const handleScroll = () => {
      if (sidebarScroll.current) return
      setSelectedProject("")
    }

    containerRef.current?.addEventListener("scrollend", handleScrollEnd)
    containerRef.current?.addEventListener("scroll", handleScroll)

    return () => {
      containerRef.current?.removeEventListener("scrollend", handleScrollEnd)
      containerRef.current?.removeEventListener("scroll", handleScroll)
    }
  }, [selectedProject])

  return (
    <div className="relative flex w-full flex-col items-center gap-8 overflow-hidden p-6 font-mono">
      <div className="absolute flex w-full max-w-[800px]">
        <ProjectsSubHeader />
      </div>

      <div className="relative mt-28 flex w-full justify-center gap-8 overflow-y-auto">
        <span className="mt-4 flex w-fit">
          <TabSidebar
            titles={projectTitles}
            selected={selectedProject}
            setSelected={handleSidebarClick}
          />
        </span>
        <div
          className="relative flex w-2/3 flex-col gap-4 overflow-y-auto px-4 xl:w-1/2"
          ref={containerRef}
        >
          <hr
            className="sticky top-0 w-full border-2 border-black"
            ref={topHrRef}
          />
          {projects.map((p, i) => (
            <ProjectCard project={p} key={i} id={p.title} />
          ))}
          <hr className="sticky bottom-0 w-full border-2 border-black" />
        </div>
      </div>
    </div>
  )
}

export default ProjectsTab
