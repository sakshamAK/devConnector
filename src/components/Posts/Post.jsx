import style from "./Post.module.css"

export const Post = ({ name, username, content, pp }) => {
    return (
        <div className={style["post-container"]}>
            <div className={style["profile"]}>
                <img src={pp} />
            </div>
            <div className={style["post-details"]}>
                <div className={style["profile-info"]}>
                    <span className={style["fullname"]}>{name}</span> <span className={style["username"]}>@{username} • 1m</span>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}
