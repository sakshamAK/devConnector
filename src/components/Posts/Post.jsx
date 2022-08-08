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
                    <div className={style["react-to-post"]}>
                        <i className = "material-symbols-outlined">favorite_border</i>
                        <i className = "material-symbols-outlined">chat_bubble</i>
                        <i className = "material-symbols-outlined">share</i>
                        <i className = "material-symbols-outlined">bookmark</i>
                    </div>
                </div>
            </div>
        </div>
    )
}
