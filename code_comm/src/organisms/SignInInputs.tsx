import Button from "../atoms/Button"
import ImageBox from "../atoms/ImageBox";
import styles from './styles/SignInInputs.module.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import Input from "../atoms/Input";
import { setEmail , setPassword} from '../slices/signinSlice'

const SignInInputs:React.FC = ()=> {

    const dispatch = useDispatch();
    const { email,password } = useSelector((state:RootState) => state.signup);

    return(
        
            
            <div className={styles.container}>
                <Input placeholder="ID"  width="270px" height="31px" onChange={(e)=> dispatch(setEmail(e.target.value))}></Input>
                <Input width="270px" height="31px" placeholder="비밀번호" onChange={(e)=> dispatch(setPassword(e.target.value))}></Input>
                <div className={styles.buttonContainer}>
                    <Button width="75px" height="33px" backgroundColor="#FFA238" color="white" label="로그인"></Button>
                    <Button width="75px" height="33px" backgroundColor="#FFA238" color="white" label="회원가입"></Button>
                </div>
            </div>
        
    )
}


export default SignInInputs;