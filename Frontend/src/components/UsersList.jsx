import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function UsersList() {

  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:4000/userapi/users")
        if (!response.ok) {
          throw new Error("Failed to fetch users")
        }
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } 
    }

    fetchUsers()

  }, [])

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>
  } 
  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>
  }
  return (
    <div className="p-10">
      <h1 className="text-3xl mb-5">Users List</h1>

      <div className="grid grid-cols-3 gap-5">
        {users.map(user => (
          <div
            key={user._id || user.id}  className="border p-4 cursor-pointer hover:bg-gray-100"  onClick={() => navigate(`/user/${user._id || user.id}`)}>
            <h2 className="font-bold">{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersList