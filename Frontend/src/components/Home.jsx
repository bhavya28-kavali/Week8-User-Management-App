import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl mb-5">Welcome</h1>
      <Link to="/add-user" className="bg-blue-500 text-white p-2 rounded">
        Add User
      </Link>
    </div>
  )
}

export default Home