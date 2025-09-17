import { Navigate, Outlet } from "react-router-dom"
import { useMyContext } from "./ProtectedRoutes"

export function UserInfo(){
    const userData = useMyContext()
    return userData ? <Outlet /> : <Navigate to="/login"/>
}