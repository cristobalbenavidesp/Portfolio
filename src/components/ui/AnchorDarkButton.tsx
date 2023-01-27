import type { ReactElement } from "react"
interface Props {
    children: React.ReactNode
    href: string
  }
  
  function AnchorDarkButton({children, href}: Props):  ReactElement {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="border border-neutral-700 py-2 flex w-36 place-content-center justify-center gap-3 place-items-center backdrop-blur-md rounded-xl text-lg font-semibold text-white bg-neutral-800 ">
          {children}
      </a>
    )
  }
  
  export default AnchorDarkButton