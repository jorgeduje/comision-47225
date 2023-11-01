import { Outlet, Navigate } from "react-router-dom"


const ProtectedRoutes = () => {

    let rolDelUsuario = "Admin"

  return (
    <>
        {
            rolDelUsuario === "Admin" ? <Outlet /> : <Navigate to="/" />
        }
    </>
  )
}

export default ProtectedRoutes