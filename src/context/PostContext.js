import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"

const PostContext = createContext(null);

const usePost = () => useContext(PostContext);


const PostProvider = ({ children }) => {
    const [chosenMedia, setMedia] = useState({});
    const [src, setSrc] = useState([])
    const [postText, setPostText] = useState("");
    const [posts, setPosts] = useState([]);
    const getEmoji = (event, emojiObject) => {
        setPostText(prev => prev + emojiObject.emoji);
    };

    const uploadPost = async postData => {
        const token = localStorage.getItem("token");
        console.log(token);
        try {
            const headers = { headers: { authorization: token } }
            const { data: { posts } } = await axios.post("/api/posts", { postData }, headers)
            setPosts(posts);
            setPostText("");
            console.log("uploadPost", posts)
        }
        catch (err) {
            console.error(err);
        }
    }

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

    return (
        <PostContext.Provider value={{ chosenMedia, setMedia, src, setSrc, getEmoji, postText, setPostText, posts, uploadPost }}>
            {children}
        </PostContext.Provider>
    )
}

export { usePost, PostProvider }