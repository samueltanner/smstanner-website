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
        <div className="font-mono w-1/2 max-w-[720px] max-h-[60%] overflow-y-scroll flex flex-col gap-4 justify-center h-full">
          <p className="">Heyyo! My name is Sam Tanner.</p>
          <p>
            I am an engineer but I wear a lot of hats (figuratively and
            literally).
          </p>
          <p>
            My biggest passion in life is building things. I've built apps for
            dairy farmers, cookware, chocolate companies, and a whole lot else
            in between.
          </p>
          <div className="w-full flex items-center justify-center mt-8">
            <button
              onClick={() => setShowAssistant(true)}
              className="border-4 border-black px-2 py-1 font-bold cursor-pointer"
            >
              Ask Me A Question*
            </button>
          </div>
          <span className="flex items-center w-full justify-center bg-red-500 ">
            <p className="text-[2px]">*Powered by Skynet</p>
          </span>
        </div>
      )}
      {showAssistant && (
        <div className="h-full w-full flex justify-center max-h-[60%] mt-20">
          <OpenAIAssistant showAssistant={true} />
        </div>
      )}
    </>
  )
}

export default MainTab
