
import SearchBar from "../atoms/SearchBar";
import Button from "../atoms/Button";


const SearchBox:React.FC = ()=>{
    return(
        <div style={{display:"flex" , justifyContent:"center", alignItems:"center",gap:"10px"}}>
            <SearchBar></SearchBar>
            <Button label="검색" width="100px" height="51px" backgroundColor="#FFA238" color="white"></Button>
        </div>
    )
}



export default SearchBox;