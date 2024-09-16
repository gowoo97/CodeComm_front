
import InputAndButton from "../molecules/InputAndButton";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import styles from './styles/SignupInputs.module.css';
import { RootState } from "../app/store";
import { setEmail, setCode,setPassword , setPasswordConfirm , setNickname } from "../slices/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../app/api";


const SignupInputs:React.FC = ()=> {
    const dispatch = useDispatch();
    const { email,code,password, passwordConfirm, nickname} = useSelector((state:RootState) => state.signup);

    const signup =async function(){
        axiosInstance.post("/auth/signup", {
            email,code,password,passwordConfirm,nickname
        })
            .then((res)=> {
                console.log("회원가입 완료");
            })
    }

    return(
        <div className={styles.container}>
            <InputAndButton label="이메일 요청" placeholder="이메일" onChange={(e) => dispatch(setEmail(e.target.value))} 
            onClick={()=>{}}></InputAndButton>
            <InputAndButton label="인증" placeholder="인증번호" onChange={(e)=> dispatch(setCode(e.target.value))}
            onClick={()=>{}}></InputAndButton>
            <Input width="270px" height="31px" placeholder="비밀번호" onChange={(e)=> dispatch(setPassword(e.target.value))}></Input>
            <br></br>
            <Input width="270px" height="31px" placeholder="비밀번호 확인" onChange={(e)=> dispatch(setPasswordConfirm(e.target.value))}></Input>
            <br></br>
            <Input width="270px" height="31px" placeholder="닉네임" onChange={(e)=> dispatch(setNickname(e.target.value))}></Input>
            <br></br>
            <Button label="회원가입" width="221px" height="41px" backgroundColor="#FFA238" color="white" onClick={signup}></Button>
        </div>
    )
}




export default SignupInputs;