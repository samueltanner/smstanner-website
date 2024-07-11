import { ResumeItem } from "@/views/ResumeTab"

const ResumeCard = (resume: ResumeItem) => {
  return (
    <div className="custom-box-shadow-black flex flex-col gap-4 border-4 border-black p-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">{resume.role}</h2>
        <h3 className="font-semibold">{resume.company}</h3>
        <h4>{resume.location}</h4>
        <h4>
          {resume.dates.start} - {resume.dates.end}
        </h4>
      </div>
      <p>{resume.description}</p>
      <ul className="list-disc pl-4">
        {resume.accomplishments.map((accomplishment, index) => (
          <li key={index}>{accomplishment}</li>
        ))}
      </ul>
    </div>
  )
}

export default ResumeCard
