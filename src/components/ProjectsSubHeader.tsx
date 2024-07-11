import { useEffect, useRef, useState } from "react"
import {
  TbBrandAdobe,
  TbBrandAws,
  TbBrandFramer,
  TbBrandGraphql,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandTailwind,
  TbBrandTypescript,
  TbLetterA,
  TbLetterN,
  TbLetterS,
  TbLetterT,
} from "react-icons/tb"
import { resourceObject } from "@/utils/constants"

import { AnimatePresence, motion, Variants } from "framer-motion"

export type Resource =
  | "next"
  | "tailwind"
  | "typescript"
  | "python"
  | "framer"
  | "aws"
  | "graphql"
  | "sst"
  | "adobe"
  | "tanstack"

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    width: 0,
    height: 0,
    originX: 0,
    originY: 0,
    border: "4px solid",
  },
  visible: {
    opacity: 1,
    width: "auto",
    height: "auto",
    transition: {
      opacity: { duration: 0.5 },
      width: { delay: 0.25, duration: 0.5 },
      height: { delay: 1, duration: 0.5 },
    },
  },
  exit: {
    opacity: 0,
    width: 4,
    height: 4,
    transition: {
      opacity: { duration: 0.5, delay: 0.75 },
      width: { duration: 0.5, delay: 0.5 },
      height: { duration: 0.5, delay: 0 },
    },
  },
}

const ProjectsSubHeader = () => {
  const [selectedIcon, setSelectedIcon] = useState<Resource | undefined>(
    undefined,
  )
  const subHeaderRef = useRef<HTMLDivElement>(null)

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (
      subHeaderRef.current &&
      !subHeaderRef.current.contains(e.relatedTarget as Node)
    ) {
      setSelectedIcon(undefined)
    }
  }

  return (
    <div className="relative flex w-full flex-col items-center">
      <div
        className="custom-box-shadow flex w-[90%] items-center justify-between gap-6 border-4 border-black px-4 py-2 *:flex-shrink-0"
        onMouseLeave={handleMouseLeave}
        ref={subHeaderRef}
      >
        <TbBrandNextjs
          className={`fade-in-out size-8 hover:text-red-500 ${selectedIcon === "next" ? "text-red-500" : ""}`}
          onClick={() => {
            setSelectedIcon("next")
          }}
        />
        <TbBrandTailwind
          className={`fade-in-out size-8 hover:text-red-500 ${selectedIcon === "tailwind" ? "text-red-500" : ""}`}
          onClick={() => {
            setSelectedIcon("tailwind")
          }}
        />
        <TbBrandTypescript
          className={`fade-in-out size-8 hover:text-red-500 ${selectedIcon === "typescript" ? "text-red-500" : ""}`}
          onClick={() => {
            setSelectedIcon("typescript")
          }}
        />
        <TbBrandPython
          className={`fade-in-out size-8 hover:text-red-500 ${selectedIcon === "python" ? "text-red-500" : ""}`}
          onClick={() => {
            setSelectedIcon("python")
          }}
        />
        <TbBrandFramer
          className={`fade-in-out size-8 hover:text-red-500 ${selectedIcon === "framer" ? "text-red-500" : ""}`}
          onClick={() => {
            setSelectedIcon("framer")
          }}
        />
        <TbBrandAws
          className={`fade-in-out size-8 hover:text-red-500 ${selectedIcon === "aws" ? "text-red-500" : ""}`}
          onClick={() => {
            setSelectedIcon("aws")
          }}
        />
        <TbBrandGraphql
          className={`fade-in-out size-8 hover:text-red-500 ${selectedIcon === "graphql" ? "text-red-500" : ""}`}
          onClick={() => {
            setSelectedIcon("graphql")
          }}
        />

        <span
          className={`fade-in-out flex *:size-4 *:stroke-[3.8px] hover:text-red-500 ${selectedIcon === "sst" ? "text-red-500" : ""}`}
          onClick={() => {
            setSelectedIcon("sst")
          }}
        >
          <TbLetterS />
          <TbLetterS className="-mx-1" />
          <TbLetterT />
        </span>

        <span
          className={`fade-in-out flex *:size-4 *:stroke-[3.8px] hover:text-red-500 ${selectedIcon === "tanstack" ? "text-red-500" : ""}`}
          onClick={() => {
            setSelectedIcon("tanstack")
          }}
        >
          <TbLetterT />
          <TbLetterA />
          <TbLetterN />
        </span>
        <TbBrandAdobe
          className={`fade-in-out size-8 hover:text-red-500 ${selectedIcon === "adobe" ? "text-red-500" : ""}`}
          onClick={() => {
            setSelectedIcon("adobe")
          }}
        />
      </div>

      <div className="ml-3 flex w-[90%] items-start">
        <AnimatePresence>
          {selectedIcon && (
            <motion.div
              key="dropdown"
              className="z-40 mt-4 max-w-full overflow-hidden bg-[#F6F6F6]"
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout="size"
            >
              <motion.div
                key={"selectedIcon"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 overflow-hidden p-4 text-start leading-8"
              >
                <span className="flex items-center gap-4">
                  {resourceObject?.[selectedIcon]?.icon}
                  <p className="mt-1">
                    {resourceObject?.[selectedIcon]?.title}
                  </p>
                </span>
                <p className="text-start">
                  {resourceObject?.[selectedIcon]?.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ProjectsSubHeader
