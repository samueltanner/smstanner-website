export type Project = {
  title: string
  sub_title: string
  url: string
  frontend_stack: string[]
  backend_stack: string[]
  role: string
  description: string
  magic: string
  affiliation: string
}

const ProjectCard = ({ project, id }: { project: Project; id: string }) => {
  return (
    <div
      className="project-card custom-box-shadow-black flex flex-col gap-4 border-4 border-black p-4"
      id={id}
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">
          {project.title} | {project.affiliation}
        </h2>
        <h3 className="font-semibold">{project.sub_title}</h3>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="text-red-500"
        >
          {project.url}
        </a>

        <h3 className="italic">{project.role}</h3>
        {/* <li>{project.magic}</li> */}

        <span className="flex gap-2">
          <h4 className="font-semibold">Frontend:</h4>{" "}
          <p>{project.frontend_stack.join(", ")}</p>
        </span>
        <span className="flex gap-2">
          <h4 className="font-semibold">Backend:</h4>{" "}
          <p>{project.backend_stack.join(", ")}</p>
        </span>
      </div>
      <p className="leading-8">{project.description}</p>
      <p className="leading-8">{project.magic}</p>
    </div>
  )
}

export default ProjectCard
