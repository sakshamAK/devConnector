import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMyPosts } from "../Redux/Features/myPosts/myPostsSlice"
import { Post } from "./Post"


export const MyProfile = () => {
    const { profileSrc, _id, firstName, lastName, username } = JSON.parse(localStorage.getItem("user"))
    const { token } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { myPosts, loading } = useSelector(state => state.myPost)

    useEffect(() => {
        dispatch(getMyPosts({ username, token }));
    }, [])
    return (
        <Flex
            alignItems="center"
            flexDirection="column"
        >
            <Flex
                height="15rem"
                width="100%"
                background="url('https://picsum.photos/1800/300')"
                justifyContent="center"
                alignItems="flex-end"
            >
                <Image
                    borderRadius="full"
                    src={profileSrc}
                    alt="profile picture"
                    height="7rem"
                    transform="translateY(50%)"
                    width="7rem"
                />
            </Flex>
            <Flex
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                mt="4rem"
            >
                <Heading as="h1" size="lg" >{firstName} {lastName}</Heading>
                <Heading as="h4" size="md" color="gray">@{username}</Heading>
            </Flex>
            <Flex
                flexDirection="column"
            >
                { loading ? <h3>loading...</h3> :
                myPosts.map(({ fullName, profileSrc, username, content, src, _id }) => <Post name={fullName} username={username} pp={profileSrc} content={content} src={src} _id ={_id} /> ) }
                </Flex>
        </Flex>
    )
}