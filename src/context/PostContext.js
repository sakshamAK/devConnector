import { createContext, useContext, useState } from "react";

const PostContext = createContext(null);

const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
    const [chosenMedia, setMedia] = useState({});

    return (
        <PostContext.Provider value={{ chosenMedia, setMedia }}>
            {children}
        </PostContext.Provider>
    )
}

export { usePost, PostProvider }