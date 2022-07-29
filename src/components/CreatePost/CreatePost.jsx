import style from './CreatePost.module.css'
import { usePost } from '../../context/PostContext';

export const CreatePost = () => {
    const {chosenMedia, setMedia} = usePost();
    return (
        <div className={style["post-container"]}>
            <textarea className={style["write-post"]}></textarea>
            <div className={style["add-to-post"]}>
                <input type="file" accept="video/*, image/*" capture="environment" multiple id="uploadImage" className={style["uploadImage"]} onChange={e => setMedia(e.target.files)} /><label htmlFor="uploadImage"><span className="material-symbols-outlined">image</span></label>
                <span className="material-symbols-outlined">gif_box</span>
                <span className="material-symbols-outlined">sentiment_satisfied</span>
                {Object.keys(chosenMedia).length !== 0 && <img src={URL.createObjectURL(chosenMedia[0])} alt="{" />}
            </div>
        </div>
    )
}
