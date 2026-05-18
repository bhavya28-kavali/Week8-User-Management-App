import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-5">

      <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-4xl w-full text-center">

        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          User Management
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Manage your users efficiently with a clean dashboard.
          Add new members, view all users, and maintain your
          database with ease and professionalism.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          <button
            onClick={() => navigate("/add-user")}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            Add New User
          </button>

          <button
            onClick={() => navigate("/users-list")}
            className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 text-gray-700 text-lg font-semibold px-8 py-4 rounded-2xl transition duration-300"
          >
            View Directory
          </button>

        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

          <div className="bg-blue-50 rounded-2xl p-6 shadow-md">

            <h2 className="text-4xl font-bold text-blue-600 mb-2">
              100+
            </h2>

            <p className="text-gray-600">
              Registered Users
            </p>

          </div>

          <div className="bg-green-50 rounded-2xl p-6 shadow-md">

            <h2 className="text-4xl font-bold text-green-600 mb-2">
              Secure
            </h2>

            <p className="text-gray-600">
              MongoDB Storage
            </p>

          </div>

          <div className="bg-purple-50 rounded-2xl p-6 shadow-md">

            <h2 className="text-4xl font-bold text-purple-600 mb-2">
              Fast
            </h2>

            <p className="text-gray-600">
              React + Express App
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Home