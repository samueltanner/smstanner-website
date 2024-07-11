import useAppContext from "@/utils/AppContext"
import { motion } from "framer-motion"

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
  return (
    <div className="relative flex gap-4 flex-col md:flex-row w-full h-fit font-bold">
      <button onClick={() => setSelectedTab("main")} className="relative">
        <motion.h1
          className="font-sans text-4xl text-start"
          variants={textAnimation(-4)}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          Sam Tanner
        </motion.h1>
      </button>
      <span className="absolute top-16 flex gap-8 flex-col md:flex-row md:right-8 md:top-4">
        <button
          className="size-fit text-lg"
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
          className="size-fit text-lg"
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
          className="size-fit text-lg"
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
        <button
          className="size-fit text-lg"
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
      </span>
    </div>
  )
}

export default NavBar
