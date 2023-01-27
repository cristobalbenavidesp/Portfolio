import type {ReactElement, ReactNode} from 'react'

interface Props {
    children : ReactNode
}

function P ({children} : Props) : ReactElement {
  return (
    <p className="text-white text-xl break-words whitespace-pre-line mt-5 px-5">{children}</p>
  )
}

export default P