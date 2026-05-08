import React from 'react'
import useFetchUsers from '../hooks/useFetchUsers'

const UserList: React.FC = () => {

    const {users,loading}=useFetchUsers('https://jsonplaceholder.typicode.com/users')
    
    if(loading){
        return <>Loading...</>
    }

    return (
        <div>
            <h2>USER LIST:</h2>
            {
                users.map(user => (
                    < div key={user.id}>
                        <p>NAME: {user.name} EMAIL: {user.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default UserList
