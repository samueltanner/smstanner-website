import { motion } from "framer-motion"
const ProjectsSidebar = ({
  projectTitles,
  selectedProject,
  setSelectedProject,
}: {
  projectTitles: string[]
  selectedProject: string | undefined
  setSelectedProject: (p: string) => void
}) => {
  return (
    <div className="flex flex-col items-end gap-4">
      {projectTitles.map((title, i) => (
        <motion.button
          key={i}
          onClick={() => setSelectedProject(title)}
          className={`whitespace-nowrap text-lg font-bold`}
          initial={{
            color: "#000",
          }}
          animate={{
            color: selectedProject === title ? "#ef4444" : "#000",
          }}
          whileHover={{
            translateY: -5,
          }}
          whileTap={{
            translateY: 0,
          }}
        >
          {title}
        </motion.button>
      ))}
    </div>
  )
}

export default ProjectsSidebar
