import Header from '../organisms/Header';
import LoginBox from '../organisms/LoginBox';
import SignInInputs from '../organisms/SignInInputs';
import styles from './styles/SignInTemplate.module.css';
import ImageBox from '../atoms/ImageBox';

const SignInTemplate:React.FC = ()=> {
    return(
        <div>
            <Header></Header>
            <div className={styles.signInBox}>
            <ImageBox url="https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_1280.jpg" width="477px" height="599px"></ImageBox>
                <LoginBox title='Sign-In'>
                    <SignInInputs></SignInInputs>
                </LoginBox>
            </div>
        </div>
    )
}


export default SignInTemplate;