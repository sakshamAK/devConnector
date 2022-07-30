import { createContext, useContext, useState } from "react";

const PostContext = createContext(null);

const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
    const [chosenMedia, setMedia] = useState({});
    const [src, setSrc] = useState([])
    const [postText, setPostText] = useState("");
    const getEmoji = (event, emojiObject) => {
        setPostText(prev => prev + emojiObject.emoji);
    };

    return (
        <PostContext.Provider value={{ chosenMedia, setMedia, src, setSrc, getEmoji, postText, setPostText }}>
            {children}
        </PostContext.Provider>
    )
}

export { usePost, PostProvider }