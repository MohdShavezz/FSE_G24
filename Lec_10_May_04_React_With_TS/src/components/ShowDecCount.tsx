import React from 'react'

type PropType={
    // count:number,
    handleDEC:()=>void
}

// async function name(params:type):Promise<{id:number,name:string}> {
    
// }

const ShowDecCount:React.FC<PropType> = ({handleDEC}) => {
  return (
    <div>
      <button onClick={handleDEC}>DEC</button>
    </div>
  )
}

export default ShowDecCount
