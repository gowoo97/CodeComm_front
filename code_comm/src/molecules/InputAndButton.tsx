
import Button from "../atoms/Button";
import styles from "./styles/InputAndButton.module.css";

interface InputAndButtonProp{
    label:string,
    placeholder:string
}

const InputAndButton:React.FC<InputAndButtonProp> = ({label,placeholder})=> {
    return(
        <div className={styles.container}>
            <input className={styles.input} placeholder={placeholder}></input>
            <Button backgroundColor="#FFA238" color="white" width="80px" height="33px" label={label} ></Button>
        </div>
    )
}



export default InputAndButton;