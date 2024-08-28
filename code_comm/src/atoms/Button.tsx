

interface buttonProps {
    label:string,
    width:string,
    height:string,
    backgroundColor:string,
    color:string
}

const Button:React.FC<buttonProps> = ({label , width,height,backgroundColor,color})=> {
    return (
        <button style={{width,height,backgroundColor,color,borderRadius:"10px"}}>
            {label}
        </button>
    );
}

export default Button;