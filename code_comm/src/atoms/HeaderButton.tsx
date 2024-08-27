import styles from './styles/HeaderButton.module.css';

interface ButtonProps{
    label: string;
    onClick: () => void;
}

const HeaderButton : React.FC<ButtonProps> = ({ label , onClick }) => {
    return (
        <div onClick={onClick} className={styles.container}>
            { label }
        </div>
    )
};


export default HeaderButton;

