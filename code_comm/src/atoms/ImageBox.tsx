import styles from './styles/ImageBox.module.css';

interface imageProps{
    url:string,
    width:string,
    height:string
}

const ImageBox:React.FC<imageProps> = ({url,width,height}) =>{
    return(
        <div style={{width,height}} className={styles.imageBox}>
            <img src={url} className={styles.imageThumbnail}></img>
        </div>
    );
}


export default ImageBox;