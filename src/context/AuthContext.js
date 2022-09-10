import { useContext, createContext, useState } from "react"
import { registerUser } from "../Redux/Features/auth/authSlice"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const dispatch = useDispatch();

    const [creds, setCreds] = useState({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        profileSrc: "https://www.gravatar.com/avatar/",
        password: ""
    });

    const [isInvalid, setIsInvalid] = useState({
        username: false,
        email: false,
        firstName: false,
        lastName: false,
        password: false,
        rePassword: false
    });

    const [password, setPassword] = useState("");
    const [loginUser, setLoginUser] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    const setCredentials = async (creds) => {
        const { username, email, firstName, lastName } = creds;
        if (!email) {
            setIsInvalid({ ...isInvalid, email: true });
            return toast.error("Email is empty");
        }
        if (!username) {
            setIsInvalid({ ...isInvalid, username: true });
            return toast.error("Username is empty");
        }
        if (!firstName) {
            setIsInvalid({ ...isInvalid, firstName: true });
            return toast.error("First name is empty");
        }
        if (!lastName) {
            setIsInvalid({ ...isInvalid, lastName: true });
            return toast.error("Last name is empty");
        }
        if (!creds.password) {
            setIsInvalid({ ...isInvalid, password: true });
            return toast.error("Password is empty")
        }
        else if (creds.password !== password || password === "") {
            setIsInvalid({ ...isInvalid, rePassword: true });
            return toast.error("Passwords do not match");
        }

        try {
            const res = await axios.post("/api/auth/signup", creds);
            console.log(res);
            toast.success("You have been signed up!");
            navigate("/login");

        }
        catch (err) {
            console.error(err);
        }
        return dispatch(registerUser(creds));
    }

    const setLoginCreds = async (username = loginUser, password = loginPass) => {
        if (!username) return toast.error("username is empty");
        if (!password) return toast.error("password is empty");

        try {
            const { data } = await axios.post("/api/auth/login", { username, password });
            console.log(data)
            localStorage.setItem("token", data.encodedToken);
            localStorage.setItem("id", data.foundUser._id);
            setAuth(true);
            navigate("/dashboard");
        }
        catch (err) {
            console.error(err);
            setAuth(false);
            return toast.error("Invalid Credentials");
        }
    }

    return (
        <AuthContext.Provider value={{ auth, creds, setCreds, isInvalid, setIsInvalid, password, setPassword, setCredentials, loginUser, setLoginUser, loginPass, setLoginPass, setLoginCreds }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }