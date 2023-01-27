import type { ReactElement } from "react"
interface Props {
  children: string
  href: string
}

function AnchorLink({children, href}: Props) : ReactElement {
  return (
    <a className="text-rose-700 underline after:content-['_↗']" target="_blank" rel="noreferrer">
        {children}
    </a>
  )
}

export default AnchorLink