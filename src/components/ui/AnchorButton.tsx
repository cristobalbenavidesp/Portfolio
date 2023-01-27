import type { ReactElement } from "react"
interface Props {
  children: React.ReactNode
  href: string
}

function AnchorButton({children, href}: Props) : ReactElement {
  return (
    <a href={href} target="_blank" className="border bg-white/50 hover:bg-white/60 border-neutral-700 py-2 flex w-36 place-content-center justify-center gap-3 place-items-center backdrop-blur-md rounded-xl text-lg font-semibold text-black " rel="noreferrer">
        {children}
    </a>
  )
}

export default AnchorButton