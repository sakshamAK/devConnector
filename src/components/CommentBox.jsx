import { Box, Heading, Textarea } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { CommentPost } from "./CommentPost"
import { CreatePost } from "./CreatePost"
import { ReplyBox } from "./ReplyBox"

export const ScaleFadeEx = ({ isOpen, onToggle, _id, post }) => {


    const { comments, loading } = useSelector(state => state.comment)
    const { fullname, username, profileSrc, src, content } = post;

    return (
        <>
            <Box
                p='40px'
                onClick={e => onToggle(e)}
                display={isOpen}
                bg='#1e1e1e80'
                position="fixed"
                top="0"
                left="0"
                width="100vw"
                height="100vh"
                overflowY="scroll"
                zIndex={1}
                onKeyDown={e => e.key === "Escape" && onToggle(e)}
                tabIndex={0}
            >
                <Box
                    py="1rem"
                    px="2rem"
                    background="white"
                    m="auto"
                    maxWidth="40rem"
                    borderRadius="1rem"
                >
                    <CommentPost name={fullname} username={username} pp={profileSrc} content={content} src={src} borderBottom="1px solid gray" />
                    {
                        loading ?
                            <p>loading...</p> :
                            comments ?
                                comments.map(({ _id, fullname, profileSrc, username, text }) => (
                                    <CommentPost key={_id} name={fullname} username={username} pp={profileSrc} content={text} fSize="1.1rem" lheight="1rem" />
                                )) :
                                <h3>No Comments</h3>
                    }
                    <ReplyBox _id={_id} />
                </Box>
            </Box>
        </>
    )
}