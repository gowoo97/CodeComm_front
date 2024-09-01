import ImageBox from "../atoms/ImageBox";
import BoardInfo from "../molecules/BoardInfo";
import BoardWriter from "../molecules/BoardWriter";

interface BoardCardProps{
    imageBoxUrl:string,
    boardInfoTitle:string,
    boardInfoContent:string,
    boardInfoCreatedAt:string,
    boardWriterUrl:string,
    boardWriter:string,
    boardWriterStar:number
}

const BoardCard:React.FC<BoardCardProps> = (boardProps:BoardCardProps)=> {
    return(
        <div style={{ border:"1px solid black", width:"224px"}}>
            <ImageBox url={boardProps.imageBoxUrl} width="224px" height="132px"></ImageBox>
            <BoardInfo title={boardProps.boardInfoTitle} content={boardProps.boardInfoContent} createdAt={boardProps.boardInfoCreatedAt}></BoardInfo>
            <BoardWriter url={boardProps.boardWriterUrl} writer={boardProps.boardWriter} star={boardProps.boardWriterStar}></BoardWriter>
        </div>
    )
}


export default BoardCard;