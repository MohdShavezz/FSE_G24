import type React from "react"


type WrapperProp={
    children:React.ReactNode
}
const Wrapper:React.FC<WrapperProp> = ({children}) => {

  return (
    <div style={{background:'red'}}>
      {children}
    </div>
  )
}

export default Wrapper
