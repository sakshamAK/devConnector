import { lazy } from 'react';
import {
    Box,
    Flex,
    Image,
    Textarea,
    Input,
    Square,
} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getPosts, uploadPost } from '../Redux/Features/posts/postSlice';
import { useEffect } from 'react';

const Picker = lazy(() => import('emoji-picker-react'));

export const CreatePost = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);
    const { profileSrc, firstName, lastName } = JSON.parse(localStorage.getItem("user"));
    const [textContent, setContent] = useState("");
    const [toggleDisplay, setDisplay] = useState("none");
    const [imgSrc, setImgSrc] = useState([]);

    const toggleEmoji = () => toggleDisplay === "none" ? setDisplay("block") : setDisplay("none");
    const getEmoji = (event, emojiObject) => setContent(prev => prev + emojiObject.emoji);
    const deleteImage = (srcItem) => setImgSrc(imgSrc.filter(item => item !== srcItem));

    const sendData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        formData.append('src', [])

        let data = Object.fromEntries(formData);
        imgSrc.length === 0 ? data = { ...data, src: [] } : imgSrc.map(item => data = { ...data, src: [...data.src, item] })

        const postData = {
            ...data,
            profileSrc,
            fullName: firstName + lastName
        };

        dispatch(uploadPost({ postData, token }));
        setImgSrc([]);
        setContent("");
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
                    <form onSubmit={e => sendData(e)}>
                        <Box width="100%">
                            <Textarea resize="none" background="white" name="content" outline="none" cols="5" rows="8" mb="0.3rem" value={textContent} onChange={e => setContent(e.target.value)}></Textarea>
                            <Flex flexDirection="column" alignItems="center">
                                <Flex gap="1rem" alignSelf="flex-start" width="100%" alignItems="flex-start">
                                    <Input type="file" accept="video/*, image/*" capture="environment" multiple id="uploadImage" display="none" onChange={e => { setImgSrc(Object.values(e.target.files).map(item => URL.createObjectURL(item))) }} onClick={() => setImgSrc([])} />
                                    <label htmlFor="uploadImage">
                                        <Square cursor="pointer" className="material-symbols-outlined">image</Square>
                                    </label>
                                    <Square cursor="pointer" className="material-symbols-outlined">gif_box</Square>
                                    <Square cursor="pointer" className="material-symbols-outlined" onClick={toggleEmoji}>sentiment_satisfied</Square>
                                    <Input type="submit" name="post" value="Post" background="brand.pr.500" color="white" ml="auto" px="1.5rem" py="0.5rem" width="min-content" />
                                    <Box position="absolute" left="50%" display={toggleDisplay}>
                                        <Picker onEmojiClick={getEmoji} />
                                    </Box>
                                </Flex>
                            </Flex>
                        </Box>
                    </form>
                    <Flex gap="1rem">
                        {imgSrc?.map((item) => (
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
