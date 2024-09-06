
import styles from "./styles/Input.module.css";


interface InputProps {
    width:string,
    height:string
}

const Input:React.FC<InputProps> = ({width,height})=> {
    return(
        <input className={styles.input} style={{width,height}}>
        
        </input>
    )
}



export default Input;