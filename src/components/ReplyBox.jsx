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
import { addComment } from '../Redux/Features/posts/commentSlice';
import { useState } from 'react';

const Picker = lazy(() => import('emoji-picker-react'));

export const ReplyBox = ({ _id }) => {
    const { profileSrc } = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth)
    const [text, setText] = useState("");

    const sendData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let commentData = Object.fromEntries(formData);
        dispatch(addComment({ commentData, token, _id }))
        setText("");
    }

    return (
        <Box p="1rem" width="100%">
            <Flex gap="1rem">
                <Image
                    src={profileSrc}
                    height="3rem"
                    width="auto"
                    alt="User Profile"
                    borderRadius='full'
                />
                <Flex width="100%" flexDirection="column">
                    <form onSubmit={(e) => sendData(e)}>
                        <Box width="100%">
                            <Textarea resize="none" background="white" value={text} onChange={e => setText(e.target.value)} name="text" outline="none" cols="5" rows="8" mb="0.3rem"></Textarea>
                            <Flex flexDirection="column" alignItems="center">
                                <Flex gap="1rem" alignSelf="flex-start" width="100%" alignItems="flex-start">
                                    <Input type="file" accept="video/*, image/*" capture="environment" multiple id="uploadImage" display="none" />
                                    <label htmlFor="uploadImage">
                                        <Square cursor="pointer" className="material-symbols-outlined">image</Square>
                                    </label>
                                    <Square cursor="pointer" className="material-symbols-outlined">gif_box</Square>
                                    <Square cursor="pointer" className="material-symbols-outlined">sentiment_satisfied</Square>
                                    <Input type="submit" name="post" value="Post" background="brand.pr.500" color="white" ml="auto" px="1.5rem" py="0.5rem" width="min-content" />
                                </Flex>
                            </Flex>
                        </Box>
                    </form>
                </Flex>
            </Flex>
        </Box >
    )
}
