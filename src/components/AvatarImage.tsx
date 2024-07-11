import useScreenDimensions from "@/hooks/useScreenDimensions"
import useAppContext from "@/utils/AppContext"
import Image from "next/image"
import { ForwardedRef, forwardRef, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const imageStrings = {
  resume: "me-resume",
  projects: "me-projects",
  about: "me-about",
  main: "me-mark",
}

const AvatarImage = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const { selectedTab } = useAppContext()
  const [imagePath, setImagePath] = useState<string | undefined>()

  const [cursorSide, setCursorSide] = useState<"left" | "right">("left")

  const { height, width } = useScreenDimensions()

  useEffect(() => {
    if (!ref || !(ref as React.MutableRefObject<HTMLDivElement>).current) return

    const updateImagePath = (e?: MouseEvent) => {
      const denominator = height > 1400 ? 2 : 5
      const screenWidth = window.innerWidth
      const cursorX = e?.clientX ?? screenWidth / denominator
      const cursorSide = cursorX < screenWidth / denominator ? "left" : "right"
      setCursorSide(cursorSide)
      selectedTab &&
        setImagePath(
          cursorX < screenWidth / denominator
            ? `/images/${imageStrings[selectedTab]}-${cursorSide}.svg`
            : `/images/${imageStrings[selectedTab]}-${cursorSide}.svg`,
        )
    }

    window.addEventListener("mousemove", updateImagePath)

    updateImagePath()

    return () => {
      window.removeEventListener("mousemove", updateImagePath)
    }
  }, [selectedTab, ref, height])

  return (
    <div className="flex h-full w-full justify-start 3xtall:justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={selectedTab}
          className="relative flex w-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {imagePath && (
            <Image src={imagePath} fill alt="Sam Tanner" className="" />
          )}
        </motion.span>
      </AnimatePresence>
    </div>
  )
})

AvatarImage.displayName = "AvatarImage"

export default AvatarImage
