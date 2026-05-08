import type React from 'react'
import './counter.css'
import { useState } from 'react'
import Actions from './Actions'

const Counter:React.FC = () => {

    const [count ,setCount]=useState<number>(0)

    function handleInc(){
        setCount(val=>val+1)
    }    
    function handleDec(){
        setCount(val=>val-1)
    }
    function handleReset(){
        setCount(0)
    }


  return (
    <div id='counter'>
      <h2>COUNTER APP</h2>
      <h3>Count: {count}</h3>
    
      <Actions
       handleInc={handleInc}
       handleDec={handleDec}
       handleReset={handleReset}
      />
    </div>
  )
}

export default Counter
