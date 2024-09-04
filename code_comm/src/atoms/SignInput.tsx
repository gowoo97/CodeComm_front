import styles from './styles/SignInput.module.css';


interface SignInputProp{
    placeholder:string
}


const SignInput:React.FC<SignInputProp> = ({placeholder}) => {
    return(
        <div style={{marginTop:"22px" , marginBottom:"22px"}}>
            <input placeholder={placeholder} className={styles.input} />
        </div>
    )
}


export default SignInput;