import { useParams } from "react-router"
import { useEffect, useState } from "react"

function User() {

  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [id])

  if (!user) return <p>Loading...</p>

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-5">User Details</h1>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
    </div>
  )
}

export default User