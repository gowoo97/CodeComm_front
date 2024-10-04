
import InputAndButton from "../molecules/InputAndButton";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import styles from './styles/SignupInputs.module.css';
import { RootState } from "../app/store";
import { setEmail, setCode,setPassword , setPasswordConfirm , setNickname } from "../slices/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../app/api";
import { useState } from "react";

const SignupInputs:React.FC = ()=> {

    const [UUID,setUUID] = useState('');
    const [verification,setVerification] = useState(false);

    const dispatch = useDispatch();
    const { email,code,password, passwordConfirm, nickname} = useSelector((state:RootState) => state.signup);
    const signup =async function(){
        try{
            const response =await axiosInstance.post("/auth/signup", {
                email,code,password,passwordConfirm,nickname
            });
            console.log(response);
            alert("회원가입 성공!");
        }catch(error){
            alert("회원가입 실패!");
        }
        
    }

    const getCode = async function(){
        axiosInstance.post("/auth/verifyCode", {
            to:email
        })
        .then((res)=> {
            setUUID(res.data.uuid);
            console.log(res.data.uuid);
        })
    }

    const verify = function(){
        return axiosInstance.post("/auth/verify",{
            code,
            uuid:UUID
        }).then(res => res.data);
    }

    return(
        <div className={styles.container}>
            <InputAndButton label="이메일 요청" placeholder="이메일" onChange={(e) => dispatch(setEmail(e.target.value))} 
            onClick={()=>{getCode()}}></InputAndButton>
            <InputAndButton label="인증" placeholder="인증번호" onChange={(e)=> dispatch(setCode(e.target.value))}
            onClick={()=>{
                verify().then(res => {
                    setVerification(res);
                    console.log(res);
                })
                
            }}></InputAndButton>
            {
                verification === true ?
                <span>인증이 완료되었습니다.</span>
                : null
            }
            <Input width="270px" height="31px" placeholder="비밀번호" onChange={(e)=> dispatch(setPassword(e.target.value))}></Input>
            <br></br>
            <Input width="270px" height="31px" placeholder="비밀번호 확인" onChange={(e)=> dispatch(setPasswordConfirm(e.target.value))}></Input>
            <br></br>
            <Input width="270px" height="31px" placeholder="닉네임" onChange={(e)=> dispatch(setNickname(e.target.value))}></Input>
            <br></br>
            <Button label="회원가입" width="221px" height="41px" backgroundColor="#FFA238" color="white" onClick={()=>signup()}></Button>
        </div>
    )
}




export default SignupInputs;