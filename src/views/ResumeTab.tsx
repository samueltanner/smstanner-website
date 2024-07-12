import ResumeCard from "@/components/ResumeCard"
import TabSidebar from "@/components/TabSidebar"
import { resume } from "@/utils/constants"
import { useEffect, useRef, useState } from "react"

const ResumeTab = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>("Ruvos")
  const resumeTitles = resume.map((r) => r.company)
  const containerRef = useRef<HTMLDivElement>(null)
  const sidebarScroll = useRef(false)
  const topHrRef = useRef<HTMLHRElement>(null)

  const handleSidebarClick = (company: string) => {
    sidebarScroll.current = true
    setSelectedCompany(company)
    const card = document.getElementById(company)
    card?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScrollEnd = () => {
      sidebarScroll.current = false
      if (!selectedCompany) {
        const container = containerRef.current
        const cards = container?.querySelectorAll(".resume-card")
        for (const card of cards!) {
          if (
            card.getBoundingClientRect().top >
            topHrRef.current?.getBoundingClientRect().top!
          ) {
            setSelectedCompany(card.id)
            return
          }
        }
      }
    }

    const handleScroll = () => {
      if (sidebarScroll.current) return
      setSelectedCompany("")
    }

    containerRef.current?.addEventListener("scrollend", handleScrollEnd)
    containerRef.current?.addEventListener("scroll", handleScroll)

    return () => {
      containerRef.current?.removeEventListener("scrollend", handleScrollEnd)
      containerRef.current?.removeEventListener("scroll", handleScroll)
    }
  }, [selectedCompany])

  return (
    <div className="relative flex w-full flex-col items-center gap-8 overflow-hidden p-6 font-mono">
      <div className="relative flex w-full justify-center gap-8 overflow-y-auto">
        <span className="mt-4 flex w-fit">
          <TabSidebar
            titles={resumeTitles}
            selected={selectedCompany}
            setSelected={handleSidebarClick}
          />
        </span>
        <div
          className="relative flex w-2/3 flex-col gap-4 overflow-y-auto px-4 lg:w-1/2"
          ref={containerRef}
        >
          <hr
            className="sticky top-0 w-full border-2 border-black"
            ref={topHrRef}
          />
          {resume.map((r, i) => (
            <ResumeCard key={i} resume={r} id={r.company} />
          ))}
          <hr className="sticky bottom-0 w-full border-2 border-black" />
        </div>
      </div>
    </div>
  )
}

export default ResumeTab
