
import Button from "../atoms/Button";
import styles from "./styles/InputAndButton.module.css";

interface InputAndButtonProp{
    label:string,
    placeholder:string,
    onChange:(e:any)=> void,
    onClick:()=>void
}

const InputAndButton:React.FC<InputAndButtonProp> = ({label,placeholder,onChange,onClick})=> {
    return(
        <div className={styles.container}>
            <input className={styles.input} placeholder={placeholder} onChange={onChange}></input>
            <Button backgroundColor="#FFA238" color="white" width="80px" height="33px" label={label} onClick={onClick}></Button>
        </div>
    )
}



export default InputAndButton;