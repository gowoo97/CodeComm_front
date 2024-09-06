
import Button from "../atoms/Button";
import styles from "./styles/InputAndButton.module.css";

interface InputAndButtonProp{
    label:string
}

const InputAndButton:React.FC<InputAndButtonProp> = ({label})=> {
    return(
        <div className={styles.container}>
            <input className={styles.input}></input>
            <Button backgroundColor="#FFA238" color="white" width="80px" height="33px" label={label} ></Button>
        </div>
    )
}



export default InputAndButton;