import OpenAIAssistant from "@/components/OpenAiAssistant"

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
        <div className="flex h-full max-h-[60%] w-1/2 max-w-[720px] flex-col justify-center gap-4 overflow-y-scroll font-mono">
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
          <div className="mt-8 flex w-full items-center justify-center">
            <button
              onClick={() => setShowAssistant(true)}
              className="cursor-pointer border-4 border-black px-2 py-1 font-bold"
            >
              Ask Me A Question*
            </button>
          </div>
          <span className="flex w-full items-center justify-center bg-red-500">
            <p className="text-[2px]">*Powered by Skynet</p>
          </span>
        </div>
      )}
      {showAssistant && (
        <div className="mt-20 flex h-full max-h-[60%] w-full justify-center">
          <OpenAIAssistant showAssistant={true} />
        </div>
      )}
    </>
  )
}

export default MainTab
