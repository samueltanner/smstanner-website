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
  const [hoveredIcon, setHoveredIcon] = useState<Resource | undefined>(
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
      console.log("mouseleave triggered")
      setHoveredIcon(undefined)
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
          className="fade-in-out size-8 hover:text-red-500"
          onPointerOver={() => {
            setHoveredIcon("next")
          }}
        />
        <TbBrandTailwind
          className="fade-in-out size-8 hover:text-red-500"
          onPointerOver={() => {
            setHoveredIcon("tailwind")
          }}
        />
        <TbBrandTypescript
          className="fade-in-out size-8 hover:text-red-500"
          onPointerOver={() => {
            setHoveredIcon("typescript")
          }}
        />
        <TbBrandPython
          className="fade-in-out size-8 hover:text-red-500"
          onPointerOver={() => {
            setHoveredIcon("python")
          }}
        />
        <TbBrandFramer
          className="fade-in-out size-8 hover:text-red-500"
          onPointerOver={() => {
            setHoveredIcon("framer")
          }}
        />
        <TbBrandAws
          className="fade-in-out size-8 hover:text-red-500"
          onPointerOver={() => {
            setHoveredIcon("aws")
          }}
        />
        <TbBrandGraphql
          className="fade-in-out size-8 hover:text-red-500"
          onPointerOver={() => {
            setHoveredIcon("graphql")
          }}
        />

        <span
          className="fade-in-out flex *:size-4 *:stroke-[3.8px] hover:text-red-500"
          onPointerOver={() => {
            setHoveredIcon("sst")
          }}
        >
          <TbLetterS />
          <TbLetterS className="-mx-1" />
          <TbLetterT />
        </span>

        <span
          className="fade-in-out flex *:size-4 *:stroke-[3.8px] hover:text-red-500"
          onPointerOver={() => {
            setHoveredIcon("tanstack")
          }}
        >
          <TbLetterT />
          <TbLetterA />
          <TbLetterN />
        </span>
        <TbBrandAdobe
          className="fade-in-out size-8 hover:text-red-500"
          onPointerOver={() => {
            setHoveredIcon("adobe")
          }}
        />
      </div>

      <div className="ml-3 flex w-[90%] items-start">
        <AnimatePresence>
          {hoveredIcon ? (
            <motion.div
              key="dropdown"
              className="z-40 mt-4 max-w-full overflow-hidden bg-[#F6F6F6]"
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              // animate={hoveredIcon ? "visible" : "exit"}
              exit="exit"
              layout="size"
            >
              <motion.div
                key={hoveredIcon}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 overflow-hidden p-4 text-start leading-8"
                // layout="size"
              >
                <span className="flex items-center gap-4">
                  {resourceObject?.[hoveredIcon]?.icon}
                  <p className="mt-1">{resourceObject?.[hoveredIcon]?.title}</p>
                </span>
                <p className="text-start">
                  {resourceObject?.[hoveredIcon]?.description}
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <></>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ProjectsSubHeader
