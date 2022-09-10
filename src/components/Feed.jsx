import { usePost } from "../context/PostContext"
import { CreatePost, Post } from "./"
import { Heading } from "@chakra-ui/react"

export const Feed = () => {
  const { posts } = usePost();
  return (
    <>
      <CreatePost />
      <Heading as="h6" size="md" mt="1rem" alignSelf="flex-start">New Feed</Heading>
      {posts?.map(({ content, profileSrc, username, fullname, src }) => <Post name={fullname} username={username} pp={profileSrc} content={content} src={src} />)}
    </>
  )
}
