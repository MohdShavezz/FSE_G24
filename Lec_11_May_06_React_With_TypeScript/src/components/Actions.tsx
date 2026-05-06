import React from 'react'

type PropType={
    handleInc:()=>void,
    handleDec:()=>void,
    handleReset:()=>void,
}

const Actions:React.FC<PropType> = (props) => {
    console.log(props)
    const {handleInc,handleDec,handleReset}=props;
  return (
    <div style={{display:'flex',gap:'1rem', justifyContent:'center'}}>
      <button onClick={handleInc} className='my-btn'>INC</button>
      <button onClick={handleDec}  className='my-btn'>DEC</button>
      <button onClick={handleReset} className='my-btn'>RESET</button>
    </div>
  )
}

export default Actions
