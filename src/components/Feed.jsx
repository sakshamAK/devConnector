import { CreatePost, Post } from "./"
import { Heading } from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux/Features/posts/postSlice";

export const Feed = () => {
  const { posts, loading } = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  
  return (
    <>
      <CreatePost />
      <h1 onClick={() => dispatch(getPosts())}>clickme</h1>
      <Heading as="h6" size="md" mt="1rem" alignSelf="flex-start">New Feed</Heading>
      {loading ? <h1>Loading...</h1> : posts?.map(({ content, profileSrc, username, fullname, src }) => <Post name={fullname} username={username} pp={profileSrc} content={content} src={src} />)}
    </>
  )
}
