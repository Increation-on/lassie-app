import styles from '../styles/Main.module.css';
import MainPageSlider from './MainPageSlider';
import MainPagePopular from './MainPagePopular';

const MainConteiner = () => {
    return (
        <main className={`${styles.content} ${styles.index}`}>
            <MainPageSlider />
            <MainPagePopular />
        </main>
    )
}

export default MainConteiner;