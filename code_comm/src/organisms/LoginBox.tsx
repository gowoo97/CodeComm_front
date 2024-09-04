import Button from "../atoms/Button";
import SignInput from "../atoms/SignInput"
import styles from './styles/LoginBox.module.css';


interface LoginBoxProp{
    title:string,
    children?:React.ReactNode
}


const LoginBox:React.FC<LoginBoxProp> = ({title,children})=> {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    )
}



export default LoginBox;