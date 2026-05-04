import React, { useState } from 'react'
import ShowDecCount from './ShowDecCount'

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0)
    function handleINC(){
        setCount(val=>val+1)
    }
    function handleDEC(){
        setCount(val=>val-1)
    }
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
    }

    return (
        <div>
            Count: {count} <br />
            <button onClick={handleINC}>INC</button> <br />
            <ShowDecCount handleDEC={handleDEC}/>
            <input type="text" placeholder='enter number' onChange={handleChange}/>
        </div>
    )
}

export default Counter
