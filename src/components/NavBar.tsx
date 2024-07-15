import useAppContext from "@/utils/AppContext"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const textAnimation = (translate: number = -2) => {
  return {
    initial: {
      translateY: 0,
      color: "#000",
      transition: { duration: 0.1 },
    },
    hover: {
      translateY: `${translate}px`,
      transition: { duration: 0.1 },
    },
    animate: {
      color: "#000",
      transition: { duration: 0.1 },
    },
  }
}

const NavBar = () => {
  const { setSelectedTab, selectedTab } = useAppContext()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }, [copied])

  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-between gap-4 font-bold md:flex-row">
      <button onClick={() => setSelectedTab("main")} className="relative">
        <motion.h1
          className="text-start font-sans text-4xl"
          variants={textAnimation(-4)}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          Sam Tanner
        </motion.h1>
      </button>
      {/* <span className="hidden *:fade-in-out absolute top-16 lg:flex flex-col items-start gap-2 font-semibold">
        <span className="flex items-center justify-center gap-2">
          <button
            className="hover:text-red-500"
            onClick={() => {
              navigator.clipboard.writeText("me@smstanner.com")
              setCopied(true)
            }}
          >
            me@smstanner.com
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
          className="hover:text-red-500"
          href="https://www.linkedin.com/in/samueltanner"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/samueltanner
        </a>
        <a
          className="hover:text-red-500"
          href="https://www.github.com/samueltanner"
          target="_blank"
          rel="noreferrer"
        >
          github.com/samueltanner
        </a>
      </span> */}
      <span className="top-16 flex flex-wrap gap-3 lg:gap-8">
        <button
          className="size-fit text-sm lg:text-lg"
          onClick={() => setSelectedTab("main")}
        >
          <motion.h3
            className="whitespace-nowrap"
            variants={textAnimation(-2)}
            initial="initial"
            animate={selectedTab === "main" ? { color: "#ef4444" } : "animate"}
            whileHover="hover"
          >
            SamGPT
          </motion.h3>
        </button>
        <button
          className="size-fit text-sm lg:text-lg"
          onClick={() => setSelectedTab("about")}
        >
          <motion.h3
            className="whitespace-nowrap"
            variants={textAnimation(-2)}
            initial="initial"
            animate={selectedTab === "about" ? { color: "#ef4444" } : "animate"}
            whileHover="hover"
          >
            About Me
          </motion.h3>
        </button>
        <button
          className="size-fit text-sm lg:text-lg"
          onClick={() => setSelectedTab("projects")}
        >
          <motion.h3
            className="whitespace-nowrap"
            variants={textAnimation(-2)}
            initial="initial"
            animate={
              selectedTab === "projects" ? { color: "#ef4444" } : "animate"
            }
            whileHover="hover"
          >
            Projects
          </motion.h3>
        </button>
        <button
          className="size-fit text-sm lg:text-lg"
          onClick={() => setSelectedTab("resume")}
        >
          <motion.h3
            className="whitespace-nowrap"
            variants={textAnimation(-2)}
            initial="initial"
            animate={
              selectedTab === "resume" ? { color: "#ef4444" } : "animate"
            }
            whileHover="hover"
          >
            Resume
          </motion.h3>
        </button>
      </span>
    </div>
  )
}

export default NavBar
