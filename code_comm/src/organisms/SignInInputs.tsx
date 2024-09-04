import SignInput from "../atoms/SignInput"
import Button from "../atoms/Button"
import ImageBox from "../atoms/ImageBox";
import styles from './styles/SignInInputs.module.css';


const SignInInputs:React.FC = ()=> {
    return(
        
            
            <div className={styles.container}>
                <SignInput placeholder="ID"></SignInput>
                <SignInput placeholder="Password"></SignInput>
                <div className={styles.buttonContainer}>
                    <Button width="75px" height="33px" backgroundColor="#FFA238" color="white" label="로그인"></Button>
                    <Button width="75px" height="33px" backgroundColor="#FFA238" color="white" label="회원가입"></Button>
                </div>
            </div>
        
    )
}


export default SignInInputs;