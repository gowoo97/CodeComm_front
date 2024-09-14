
import styles from "./styles/Input.module.css";


interface InputProps {
    width:string,
    height:string,
    placeholder:string
}

const Input:React.FC<InputProps> = ({width,height,placeholder})=> {
    return(
        <input className={styles.input} style={{width,height}} placeholder={placeholder}>
        
        </input>
    )
}



export default Input;