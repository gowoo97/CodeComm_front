
import styles from "./styles/Input.module.css";


interface InputProps {
    width:string,
    height:string,
    placeholder:string,
    onChange:(e:any) => void
}

const Input:React.FC<InputProps> = ({width,height,placeholder,onChange})=> {
    return(
        <input className={styles.input} style={{width,height}} placeholder={placeholder} onChange={onChange}>
        
        </input>
    )
}



export default Input;