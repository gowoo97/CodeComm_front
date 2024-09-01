
interface BoardInfoProps{
    title:string,
    content:string,
    createdAt:string
}

const BoardInfo:React.FC<BoardInfoProps> = ({title,content,createdAt}) =>{
    return(
        <div style={{width:"224px"}}>
            <h5>{title}</h5>
            <p>
                {content}
            </p>
            <span>{createdAt}</span>
        </div>
    )
} 


export default BoardInfo;