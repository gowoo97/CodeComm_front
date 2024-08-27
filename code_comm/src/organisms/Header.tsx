import HeaderBar from "../molecules/HeaderBar";

import styles from './styles/Header.module.css';




const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <HeaderBar></HeaderBar>
        </div>
    )
}



export default Header;