import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./components/Home"
import AddUser from "./components/AddUser"
import UsersList from "./components/UsersList"
import User from "./components/User"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/add-user",
    element: <AddUser />
  },
  {
    path: "/users-list",
    element: <UsersList />
  },
  {
    path: "/user/:id",
    element: <User />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App