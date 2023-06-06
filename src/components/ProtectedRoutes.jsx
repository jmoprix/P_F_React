import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {

    //¿Como sabemos si ya se inicio session?
    //Porque si inicio sesion habra un tokenen el localStorage

    const tokenValue = localStorage.getItem("token")

    if ( tokenValue ) {

        return <Outlet />
    } else {
        return <Navigate to="/login"/>
    }
}
export default ProtectedRoutes