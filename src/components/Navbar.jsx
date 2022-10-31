import {
    Flex,
    Heading
} from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutHandler } from "../Redux/Features/auth/authSlice";

export const Navbar = () => {
    const { auth } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(logoutHandler());
        navigate("/");
    }

    return (
        <Flex bg="#343a40" py={3} px={10}>
            <Heading as="h1" size="lg" color="#ffffff" width="max-content">
                DevConnector
            </Heading>
            <Flex
                alignItems="center"
                cursor="pointer"
                title= "my profile"
                ml="auto"
                className="material-symbols-outlined"
                color="white"
                onClick={() => true && navigate("/myProfile")}
            >
                {true ? "person" : ""}
            </Flex>
            <Flex
                alignItems="center"
                cursor="pointer"
                title="Login"
                ml="1rem"
                className="material-symbols-outlined"
                color="white"
                onClick={() => true ? logout() : navigate("/login")}
            >
                {auth ? "logout" : "login"}
            </Flex>
        </Flex>
    );
};
