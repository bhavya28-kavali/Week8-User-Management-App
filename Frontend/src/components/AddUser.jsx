import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()

  const onUserCreate = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:4000/userapi/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      )

      if (!response.ok) {
        throw new Error("Failed to create user")
      }

      await response.json()

      navigate("/users-list")

    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200">

      <div className="bg-white shadow-2xl rounded-2xl p-10 w-[420px]">

        <h1 className="text-4xl font-bold text-gray-700 mb-8 tracking-wide text-center">
          Add User
        </h1>

        <form
          onSubmit={handleSubmit(onUserCreate)}
          className="flex flex-col gap-5"
        >

          {/* Name */}
          <input
            placeholder="Name"
            {...register("name", {
              required: "Name required"
            })}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-300"
          />

          {errors.name && (
            <p className="text-red-500 text-sm text-left">
              {errors.name.message}
            </p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email required"
            })}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-300"
          />

          {errors.email && (
            <p className="text-red-500 text-sm text-left">
              {errors.email.message}
            </p>
          )}

          {/* Date Of Birth */}
          <input
            type="date"
            {...register("dateOfBirth", {
              required: "Date of Birth required"
            })}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-300"
          />

          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm text-left">
              {errors.dateOfBirth.message}
            </p>
          )}

          {/* Mobile Number */}
          <input
            type="tel"
            placeholder="Mobile Number"
            {...register("mobileNumber", {
              required: "Mobile number required"
            })}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-300"
          />

          {errors.mobileNumber && (
            <p className="text-red-500 text-sm text-left">
              {errors.mobileNumber.message}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded-lg shadow-lg transition duration-300"
          >
            Add User
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddUser