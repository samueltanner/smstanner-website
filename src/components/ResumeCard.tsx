import { ResumeItem } from "@/views/ResumeTab"

const ResumeCard = ({ resume, id }: { resume: ResumeItem; id: string }) => {
  return (
    <div
      className="resume-card custom-box-shadow-black flex flex-col gap-4 border-4 border-black p-4"
      id={id}
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-extrabold">{resume.role}</h2>
        <h3 className="font-semibold">{resume.company}</h3>
        <span className="flex gap-6">
          {resume.urls.map((url) => (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-red-500"
            >
              {url}
            </a>
          ))}
        </span>
        <h4>{resume.location}</h4>
        <h4>
          {resume.dates.start} - {resume.dates.end}
        </h4>
      </div>
      <p className="font-semibold">{resume.description}</p>
      <ul className="list-disc space-y-2 pl-4">
        {resume.accomplishments.map((accomplishment, index) => (
          <li key={index}>{accomplishment}</li>
        ))}
      </ul>
    </div>
  )
}

export default ResumeCard
