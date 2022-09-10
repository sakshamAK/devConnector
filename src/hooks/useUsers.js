import { useState } from "react";
import axios from "axios";

export const useUsers = async () => {
    const [ users, setUsers ] = useState([]);
    const { data } = await axios.get("/api/users");
    setUsers(data.users)
    return users;
}