import styles from '../styles/Main.module.css';
import Card from './Card';
import img1 from '../../../images/good-1.jpg';
import img2 from '../../../images/good-2.jpg';
import img3 from '../../../images/good-3.jpg';
import img4 from '../../../images/good-4.jpg';
import img5 from '../../../images/good-5.jpg';

const MainPagePopular = () => {
    return (
        <section className={styles.popular}>
            <div className={styles.container}>
                <h1 className={styles.heading}>
                    <span className={styles.heading__text}>Популярные товары</span>
                </h1>
                <ul className={styles.goods}>
                    <Card price='1599 р.' name="Шапка-бини для новорожденных Hilal"
                        img={img1} />
                    <Card price='2899 р.' name="Зимний комбинезон для новорожденных Grian"
                        img={img2} />
                    <Card price='3299 р.' name="Кросовки Reimatec® для детей Wetter"
                        img={img3} />
                    <Card price='3899 р.' name="Детская зимняя куртка Reimatec® Dinkar"
                        img={img4} />
                    <Card price='849 р.' name="Пинетки для новорожденных Neuvo"
                        img={img5} />
                    <Card price='1599 р.' name="Шапка-бини для новорожденных Hilal"
                        img={img1} />
                    <Card price='2899 р.' name="Зимний комбинезон для новорожденных Grian"
                        img={img2} />
                    <Card price='3299 р.' name="Кросовки Reimatec® для детей Wetter"
                        img={img3} />
                    <Card price='3899 р.' name="Детская зимняя куртка Reimatec® Dinkar"
                        img={img4} />
                    <Card price='849 р.' name="Пинетки для новорожденных Neuvo"
                        img={img5} />
                </ul>
            </div>
        </section>
    )
}

export default MainPagePopular;