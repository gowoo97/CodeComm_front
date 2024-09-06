
import InputAndButton from "../molecules/InputAndButton";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import styles from './styles/SignupInputs.module.css';

const SignupInputs:React.FC = ()=> {
    return(
        <div className={styles.container}>
            <InputAndButton label="이메일 요청"></InputAndButton>
            <InputAndButton label="인증"></InputAndButton>
            <Input width="270px" height="31px"></Input>
            <br></br>
            <Input width="270px" height="31px"></Input>
            <br></br>
            <Input width="270px" height="31px"></Input>
            <br></br>
            <Button label="회원가입" width="221px" height="41px" backgroundColor="#FFA238" color="white"></Button>
        </div>
    )
}




export default SignupInputs;