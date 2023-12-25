import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export default function PublicRoute({ children }) {
    const auth = useAuth();
    return auth ? <Navigate to={"/"} /> : children ;
}
