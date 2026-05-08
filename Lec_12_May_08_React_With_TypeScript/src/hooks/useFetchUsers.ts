import { useEffect, useState } from 'react'


type USER_TYPE = {
    id: number,
    name: string,
    email: string
}

const useFetchUsers = (url:string) => {
  const [users, setUsers] = useState<USER_TYPE[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        async function fetchUsers() {
            try {
                setLoading(true)
                const res = await fetch(url)
                const data: USER_TYPE[] = await res.json()
                setLoading(false)
                setUsers(data)

            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])

    return {users,loading}
}

export default useFetchUsers
