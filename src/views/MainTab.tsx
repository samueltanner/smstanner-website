import OpenAIAssistant from "@/components/OpenAiAssistant"
import { motion } from "framer-motion"

const MainTab = ({
  showAssistant,
  setShowAssistant,
}: {
  showAssistant: boolean
  setShowAssistant: (val: boolean) => void
}) => {
  return (
    <>
      {!showAssistant && (
        <div className="flex h-full lg:w-1/2 max-w-[720px] flex-col lg:justify-center gap-4 overflow-y-scroll font-mono">
          <p className="">Heyyo! My name is Sam Tanner.</p>
          <p>
            I am an engineer but I wear a lot of hats (figuratively and
            literally).
          </p>
          <p>
            My biggest passion in life is building things. I&apos;ve built apps
            for dairy farmers, cookware, chocolate companies, and a whole lot
            else in between.
          </p>
          <div className="mt-2 3xtall:mt-8 flex w-full items-center justify-center">
            <motion.button
              initial={{
                color: "#000",
                border: "4px solid",
                position: "relative",
                padding: "0.25em 0.75em",
              }}
              whileHover={{
                boxShadow:
                  "1px 1px 0px 0px #ef4444, 2px 2px 0px 0px #ef4444, 3px 3px 0px 0px #ef4444, 4px 4px 0px 0px #ef4444, 5px 5px 0px 0px #ef4444",
                transition: { duration: 0.1 },
                transform: "translate(-4px, -5px)",
              }}
              whileTap={{
                boxShadow: "none",
                transform: "translate(0px, 0px)",
                transition: { duration: 0.1 },
              }}
              onTap={() => {
                setShowAssistant(true)
              }}
              className="font-semibold"
            >
              Ask Me A Question*
            </motion.button>
          </div>
          <span className="flex w-full items-center justify-center">
            <p className="text-sm">*Powered by Skynet</p>
          </span>
        </div>
      )}

      <OpenAIAssistant showAssistant={showAssistant} />
    </>
  )
}

export default MainTab