import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"

const PostContext = createContext(null);

const usePost = () => useContext(PostContext);


const PostProvider = ({ children }) => {
    const [src, setSrc] = useState([])
    const [postText, setPostText] = useState("");
    const [posts, setPosts] = useState([]);
    const getEmoji = (event, emojiObject) => {
        setPostText(prev => prev + emojiObject.emoji);
    };

    const resetPost = () => document.forms[0]?.reset();

    const uploadPost = async postData => {
        const token = localStorage.getItem("token");
        try {
            const headers = { headers: { authorization: token } }
            const { data: { posts } } = await axios.post("/api/posts", { postData }, headers)
            setPosts(posts);
            setPostText("");
            setSrc([]);
            resetPost();
        }
        catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("/api/posts");
                setPosts(data.posts);
            }
            catch (err) {
                console.error(err);
            }

        })();
    }, [])

    return (
        <PostContext.Provider value={{ src, setSrc, getEmoji, resetPost, uploadPost, postText, setPostText, posts, setPosts }}>
            {children}
        </PostContext.Provider>
    )
}

export { usePost, PostProvider }