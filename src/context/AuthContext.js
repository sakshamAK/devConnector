import { useContext, createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [togglePassMsg, setPassMsg] = useState(false);
    const [isAuth, setAuth] = useState(true);

    const getCredentials = async () => {
        try {
            const axiosBody = { username, password }
            const res = await axios.post("/api/auth/login", axiosBody);
            localStorage.setItem("token", await res.data.encodedToken)
            setAuth(true);
            navigate("/dashboard");
        }
        catch (err) {
            console.error(err)
            setAuth(false);
        }
    }

    const getSignupCredentials = async () => {
        try {
            const axiosBody = { username, password }
            const res = await axios.post("/api/auth/signup", axiosBody);
            console.log(res)
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <AuthContext.Provider value={{ username, setUsername, registerPassword, setRegisterPassword, password, setPassword, getCredentials, setRePassword, rePassword, getSignupCredentials, togglePassMsg, setPassMsg, isAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }