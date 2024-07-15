import ResumeCard from "@/components/ResumeCard"
import TabSidebar from "@/components/TabSidebar"
import { resume } from "@/utils/constants"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb"

const ResumeTab = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>("Ruvos")
  const [copied, setCopied] = useState(false)

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
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }, [copied])

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
    <div className="relative flex w-full flex-col items-center gap-8 overflow-hidden font-mono lg:p-6">
      <div className="relative flex w-full justify-center gap-8 overflow-y-auto">
        <span className="mt-4 hidden w-fit lg:flex">
          <TabSidebar
            titles={resumeTitles}
            selected={selectedCompany}
            setSelected={handleSidebarClick}
          />
        </span>
        <div
          className="relative flex w-full flex-col gap-4 overflow-y-auto overflow-x-hidden px-4 lg:w-1/2"
          ref={containerRef}
        >
          <hr
            className="sticky top-0 w-full border-2 border-black"
            ref={topHrRef}
          />

          <div className="custom-box-shadow-black top-16 flex flex-col items-start gap-2 break-all border-4 border-black p-4 font-semibold *:fade-in-out">
            <span className="flex items-center justify-center gap-2">
              <button
                className="flex items-center gap-2 hover:text-red-500"
                onClick={() => {
                  navigator.clipboard.writeText("me@smstanner.com")
                  setCopied(true)
                }}
              >
                <TbMail className="flex size-5 flex-shrink-0" />
                <p>me@smstanner.com</p>
              </button>
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-0.5 text-sm"
                  >
                    Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
            <a
              className="flex items-center gap-2 hover:text-red-500"
              href="https://www.linkedin.com/in/samueltanner"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandLinkedin className="flex size-5 flex-shrink-0" />
              <p>samueltanner</p>
            </a>
            <a
              className="flex items-center gap-2 hover:text-red-500"
              href="https://www.github.com/samueltanner"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandGithub className="flex size-5 flex-shrink-0" />
              <p>samueltanner</p>
            </a>
          </div>

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
