
import ResumeCard from "@/components/ResumeCard"
import { resume } from "@/utils/constants"
export type ResumeItem = {
  company: string
  url: string
  role: string
  dates: {
    start: string
    end: string
  }
  location: string
  description?: string
  accomplishments: string[]
}
const ResumeTab = () => {
  return (
    <div className="font-mono w-1/2 max-w-[720px] max-h-[60%] overflow-y-scroll mt-20 flex flex-col gap-8 bg-blue-500">
      {resume.map((r, i) => (
        <ResumeCard key={i} {...r} />
      ))}
    </div>
  )
}

export default ResumeTab
