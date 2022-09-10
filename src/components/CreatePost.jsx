import { usePost } from '../context/PostContext';
import { useState } from 'react';
import Picker from 'emoji-picker-react';
import { useAuth } from "../context/AuthContext"
import axios from "axios";
import {
    Box,
    Flex,
    Image,
    Textarea,
    Input,
    Square,
    Button,
} from "@chakra-ui/react"

export const CreatePost = () => {
    const { src, getEmoji, postText, setPostText, setSrc, uploadPost, resetPost, name } = usePost();
    const { creds: { profileSrc, firstName } } = useAuth();
    const [toggleDisplay, setDisplay] = useState("none");
    const toggleEmoji = () => toggleDisplay === "none" ? setDisplay("block") : setDisplay("none");

    const username = async () => {
        try {

            const { data: { users } } = await axios.get("/api/users");
            const username = users.find(item => item._id === localStorage.getItem("id"));
            const fullname = await username.firstName + " " + username.lastName;
            return fullname;
        }
        catch (err) {
            console.error(err)
        }
    }

    let postData = {};
    username().then(item => {
        postData = {
            profileSrc,
            src,
            content: postText,
            fullname: item
        }
    })

    const deleteImage = (srcItem) => {
        setSrc(src.filter(item => item !== srcItem));
    }

    return (
        <Box background="brand.light" p="1rem" width="100%">
            <Flex gap="1rem">
                <Image
                    src={profileSrc}
                    height="3rem"
                    width="auto"
                    alt="User Profile"
                    borderRadius='full'
                />
                <Flex width="100%" flexDirection="column">
                    <Box width="100%">
                        <Textarea background="white" outline="none" cols="5" rows="8" mb="0.3rem" value={postText} onChange={e => setPostText(e.target.value)}></Textarea>
                        <Flex flexDirection="column" alignItems="center">
                            <Flex gap="1rem" alignSelf="flex-start" width="100%" alignItems="flex-start">
                                <form>
                                    <Input type="file" accept="video/*, image/*" capture="environment" multiple id="uploadImage" display="none" onChange={e => setSrc(e.target.files && Object.values(e.target.files).map(item => URL.createObjectURL(item)))} onClick={resetPost()} />
                                    <label htmlFor="uploadImage">
                                        <Square cursor="pointer" className="material-symbols-outlined">image</Square>
                                    </label>
                                </form>
                                <Square cursor="pointer" className="material-symbols-outlined">gif_box</Square>
                                <Square cursor="pointer" className="material-symbols-outlined" onClick={toggleEmoji}>sentiment_satisfied</Square>
                                <Button onClick={() => uploadPost(postData)} colorScheme="brand.pr" ml="auto" px="1.5rem" py="0.5rem" height="auto" >Post</Button>
                                <Box display={toggleDisplay} position="absolute" left="45%">
                                    <Picker onEmojiClick={getEmoji} />
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                    <Flex gap="1rem">
                        {src?.map((item) => (
                            <Flex flexDirection="column" alignItems="center">
                                <Square
                                    className="material-icons"
                                    cursor="pointer"
                                    position="relative"
                                    top="50%"
                                    background="brand.light"
                                    opacity="0.7"
                                    p="0.2rem"
                                    borderRadius="full"
                                    onClick={() => deleteImage(item)}
                                >
                                    close
                                </Square>
                                <Image src={item} alt="media" height="4rem" width="auto" />
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Box >
    )
}
