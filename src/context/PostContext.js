import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"

const PostContext = createContext(null);

const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("/api/posts")
                setPosts(data.posts)
            }
            catch (err) {
                console.error(err)
            }
        })();
    }, [])

    const [chosenMedia, setMedia] = useState({});
    const [src, setSrc] = useState([])
    const [postText, setPostText] = useState("");
    const getEmoji = (event, emojiObject) => {
        setPostText(prev => prev + emojiObject.emoji);
    };

    return (
        <PostContext.Provider value={{ chosenMedia, setMedia, src, setSrc, getEmoji, postText, setPostText, posts }}>
            {children}
        </PostContext.Provider>
    )
}

export { usePost, PostProvider }