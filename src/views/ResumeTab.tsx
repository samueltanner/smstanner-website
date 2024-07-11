import ResumeCard from "@/components/ResumeCard"
import { resume } from "@/utils/constants"
export type ResumeItem = {
  company: string
  urls: string[]
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
    <div className="mt-20 flex max-h-[60%] w-1/2 max-w-[720px] flex-col gap-8 overflow-y-scroll bg-blue-500 font-mono">
      {resume.map((r, i) => (
        <ResumeCard key={i} {...r} />
      ))}
    </div>
  )
}

export default ResumeTab
