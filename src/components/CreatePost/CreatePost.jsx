import style from './CreatePost.module.css'
import { usePost } from '../../context/PostContext';
import { useEffect, useState } from 'react';
import Picker from 'emoji-picker-react';

export const CreatePost = () => {
    const { chosenMedia, setMedia, src, setSrc, getEmoji, postText, setPostText } = usePost();
    const [toggleDisplay, setDisplay] = useState("none")
    const mediaCount = Object.values(chosenMedia);
    const imageExist = mediaCount.length !== 0;
    

    useEffect(() => {
        setSrc(mediaCount.map(item => URL.createObjectURL(item)))
    }, [chosenMedia])

    const deleteImage = (idx) => { console.log(src); return setSrc(src.filter(item => item !== src[idx])) }
    const toggleEmoji = () => toggleDisplay === "none" ? setDisplay("block") : setDisplay("none");

    return (
        <div className={style["post-container"]}>
            <textarea className={style["write-post"]} cols="5" rows="8" value = {postText} onChange = {e => setPostText(e.target.value)} ></textarea>
            <div className={style["add-to-post"]}>
                <div className={style["upload-items"]}>
                    <input type="file" accept="video/*, image/*" capture="environment" multiple id="uploadImage" className={style["uploadImage"]} onChange={e => setMedia(e.target.files)} /><label htmlFor="uploadImage"><span className="material-symbols-outlined">image</span></label>
                    <span className="material-symbols-outlined">gif_box</span>
                    <span className="material-symbols-outlined" onClick = { toggleEmoji }>sentiment_satisfied</span>
                    <div className = {style["emoji-picker"]} style = {{display: toggleDisplay}} ><Picker onEmojiClick={getEmoji}/></div>
                    <button className = {style["post-btn"]}>Post</button>
                </div>
                <div className={style["preview-image"]}>
                    {imageExist && src?.map((item, idx) => (
                        <div>
                            <i className={`material-icons ${style["delete-image"]}`} onClick={() => deleteImage(idx)} >close</i>
                            <img className={style["uploaded-image"]} src={src[idx]} alt="media" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
