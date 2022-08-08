import { usePost } from "../../context/PostContext"
import { CreatePost } from "../CreatePost/CreatePost"
import { Post } from "../Posts/Post"
import style from "./Feed.module.css"

export const Feed = () => {
  const { posts } = usePost();
  return (
    <>
      <CreatePost />
      <h3 className={style["feed-heading"]}>New Feed</h3>
      {posts.map(({ content, profileImage, username, fullname }) => <Post name={fullname} username={username} pp={profileImage} content={content} />)}
    </>
  )
}
