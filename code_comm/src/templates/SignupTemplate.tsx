
import Header from "../organisms/Header";
import ImageBox from "../atoms/ImageBox";
import LoginBox from "../organisms/LoginBox";
import SignInInputs from "../organisms/SignInInputs";
import styles from './styles/SignupTemplate.module.css';
import SignupInputs from "../organisms/SignupInputs";

const SignupTemplate:React.FC  = ()=> {
    return(
        <div>
            <Header></Header>
            <div className={styles.signupBox}>
            <ImageBox url="https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_1280.jpg" width="477px" height="599px"></ImageBox>
            <div className={styles.inputContainer}>
                <LoginBox title='Sign-Up'>
                    <SignupInputs></SignupInputs>
                </LoginBox>
            </div>
            </div>
        </div>
    )
}


export default SignupTemplate;