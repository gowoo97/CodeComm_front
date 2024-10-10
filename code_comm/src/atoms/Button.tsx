

interface buttonProps {
    label:string,
    width:string,
    height:string,
    backgroundColor:string,
    color:string,
    onClick?:(e:any)=>void
}

const Button:React.FC<buttonProps> = ({label , width,height,backgroundColor,color,onClick})=> {
    return (
        <button style={{width,height,backgroundColor,color,borderRadius:"10px"}} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;