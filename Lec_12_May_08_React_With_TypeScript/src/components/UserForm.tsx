import React, { useState } from 'react'

type FORM_TYPE={
    name:string,
    email:string
}

const UserForm: React.FC = () => {

    const [formdata,setFormdata]=useState<FORM_TYPE>({name:'',email:''})



    // function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    //     const {name,value}=e.target
    //     // console.log(name,value)
    //     setFormdata(formdata=>({
    //         ...formdata, // name email
    //         [name]:value
    //     }))
    // }

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        //api call
        console.log(formdata)
        setFormdata({name:'',email:''})
    }

    function handleFORMDATA(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        //  const email = formData.get("email");
        const values = Object.fromEntries(formData.entries());
        console.log(values);
    }
    return (
        <div className='form-style'>    
            <h2 style={{textAlign:'center'}}>MY FORM</h2>
            <form onSubmit={handleFORMDATA}>
                <input 
                // value={formdata.name} 
                type="text" placeholder='enter name' name='name' 
                // onChange={handleChange} 
                />
                <input 
                // value={formdata.email} 
                type="text" placeholder='enter age' name='email' 
                // onChange={handleChange}
                />
                <button type='submit' className='my-btn'>submit</button>
            </form>
        </div>
    )
}

export default UserForm
