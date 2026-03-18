import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"

function AddUser() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onUserCreate = async (data) => {

    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })

    navigate("/users-list")
  }

  return (
    <div className="text-center mt-10">

      <h1 className="text-3xl text-gray-600 mb-5">
        Add User
      </h1>

      <form
        onSubmit={handleSubmit(onUserCreate)} className="max-w-sm mx-auto flex flex-col gap-3">
        <input  placeholder="Name"  {...register("name", { required: "Name required" })} className="border p-2"/>
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input  type="email"  placeholder="Email"  {...register("email", { required: "Email required" })}  className="border p-2"/>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        
        <input  type="date"  {...register("dob", { required: "Date of Birth required" })} className="border p-2"/>
        {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}

        <input  type="tel"  placeholder="Mobile Number"  {...register("mobile", { required: "Mobile number required" })}  className="border p-2"/>
        {errors.mobile && (<p className="text-red-500">{errors.mobile.message}</p>
        )}

        <button
          type="submit" className="bg-green-500 text-white p-2">
          Add User
        </button>

      </form>

    </div>
  )
}

export default AddUser