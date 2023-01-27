import type { ReactElement } from 'react'

interface Props {
    children : string
}
function H1 ({children} : Props) : ReactElement {
  return (
      <h1 className="text-white font-bold text-2xl mt-20 mx-5 border-b pb-5">{children}</h1>
      
  )
}

export default H1