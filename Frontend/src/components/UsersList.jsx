import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function UsersList() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const response = await fetch(
          "http://localhost:4000/userapi/users"
        )

        if (!response.ok) {
          throw new Error("Failed to fetch users")
        }

        const data = await response.json()

        setUsers(data)

      } catch (error) {

        setError(error.message)

      } finally {

        setLoading(false)
      }
    }

    fetchUsers()

  }, [])


  if (loading) {
    return (
      <h1 className="text-center mt-20 text-2xl">
        Loading...
      </h1>
    )
  }

  if (error) {
    return (
      <h1 className="text-center mt-20 text-red-500 text-2xl">
        {error}
      </h1>
    )
  }

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      {/* Heading */}
      <div className="text-center mb-10">

        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          User Directory
        </h1>

        <p className="text-gray-500 text-lg">
          Manage and view all registered users
        </p>

      </div>


      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {users.map((user) => (

          <div
            key={user._id}
            onClick={() => navigate(`/user/${user._id}`)}
            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300"
          >

            {/* Avatar */}
            <div className="flex justify-center mb-4">

              <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>

            </div>


            {/* User Info */}
            <div className="text-center">

              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                {user.name}
              </h2>

              <p className="text-gray-500 mb-2">
                {user.email}
              </p>

              <p className="text-gray-600">
                📱 {user.mobileNumber}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default UsersList