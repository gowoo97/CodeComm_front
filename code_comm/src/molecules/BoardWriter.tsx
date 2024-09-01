import ProfileImage from "../atoms/ProfileImage"

interface BoardWriterProps {
    url:string,
    writer:string,
    star:number
}

const BoardWriter:React.FC<BoardWriterProps> = ({url,writer,star}) => {
    return(
        <div style={{display:"flex",width:"224px"}}>
            <div style={{display:"flex"}}>
            <ProfileImage url="https://via.placeholder.com/300x300" width="30px" height="30px"></ProfileImage>
            <span>{writer}</span>
            </div>
            <div style={{margin:"0 auto"}}>
                <span>★</span>
                <span>{star}</span>
            </div>
        </div>
    )
}



export default BoardWriter;