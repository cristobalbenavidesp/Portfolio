import type { ReactElement, ReactNode } from "react"

interface Props {
  title: string
  desc: string
  imgSource: string
  href: string
  children: ReactNode[]
}

function ProjectCard({title, desc, imgSource, children, href}: Props) : ReactElement{
  return (
    <a className="flex flex-col items-center mt-10 w-full px-10 max-w-[350px]" href={href} target="_blank" rel="noreferrer">
        <img className="aspect-video w-full bg-green-300 rounded-t-lg" src={imgSource} alt={title}/>
        <div className="bg-white w-full border p-2 pb-4 rounded-b-lg">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p>{desc}</p>
            <div className="flex gap-2 mt-3">
              {children}
            </div>  
        </div>
    </a>
  )
}

export default ProjectCard