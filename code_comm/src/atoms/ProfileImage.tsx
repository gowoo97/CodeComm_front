
import styles from "./styles/ImageBox.module.css";

interface ProfileImage{
    url:string,
    width:string,
    height:string
}


const ProfileImage:React.FC<ProfileImage> = ({url,width,height})=> {
    return(
        <div style={{width,height,borderRadius:"70%"}} className={styles.imageBox}>
            <img src={url} className={styles.imageThumbnail}></img>
        </div>
    )
}



export default ProfileImage;