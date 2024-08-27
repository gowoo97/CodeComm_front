import styles from './styles/HeaderBar.module.css';
import HeaderButton from '../atoms/HeaderButton';



const HeaderBar:React.FC = () => {
    return (
        <div  className={styles.container}>
            <div>
            <HeaderButton label='Home' onClick={()=>{}}></HeaderButton>
            </div>

            <div className={styles.right}>
            <HeaderButton  label='Login' onClick={()=>{}} ></HeaderButton>
            </div>
        </div>
    );
}



export default HeaderBar;