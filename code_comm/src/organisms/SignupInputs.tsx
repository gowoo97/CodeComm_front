
import InputAndButton from "../molecules/InputAndButton";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import styles from './styles/SignupInputs.module.css';

const SignupInputs:React.FC = ()=> {
    return(
        <div className={styles.container}>
            <InputAndButton label="이메일 요청" placeholder="이메일"></InputAndButton>
            <InputAndButton label="인증" placeholder="인증번호"></InputAndButton>
            <Input width="270px" height="31px" placeholder="비밀번호"></Input>
            <br></br>
            <Input width="270px" height="31px" placeholder="비밀번호 확인"></Input>
            <br></br>
            <Input width="270px" height="31px" placeholder="닉네임"></Input>
            <br></br>
            <Button label="회원가입" width="221px" height="41px" backgroundColor="#FFA238" color="white"></Button>
        </div>
    )
}




export default SignupInputs;