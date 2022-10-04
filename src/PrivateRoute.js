import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {
    const { auth } = useSelector((state) => state.auth);
    return true ? <Outlet /> : <Navigate to="/login" />
}