import { motion } from "framer-motion"
const TabSidebar = ({
  titles,
  selected,
  setSelected,
}: {
  titles: string[]
  selected: string | undefined
  setSelected: (title: string) => void
}) => {
  return (
    <div className="flex flex-col items-end gap-4">
      {titles.map((title, i) => (
        <motion.button
          key={i}
          onClick={() => setSelected(title)}
          className={`whitespace-nowrap text-lg font-bold`}
          initial={{
            color: "#000",
          }}
          animate={{
            color: selected === title ? "#ef4444" : "#000",
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

export default TabSidebar
