import styles from '../styles/Header.module.css';

const HeaderMiddle = (props) => {

    const contacts = [
        { tel: "8 495 215-04-35", info: "с 9:00 до 24:00 ежедневно" },
        { tel: "8 800 333-12-04", info: "24 часа 7 дней в неделю" }
    ]

    return (
        <div className={styles.header__middle}>
            <div className={`${styles.container} ${styles.header__container} ${styles.header__container_middle}`}>
                <div className={`${styles.header__col} ${styles.header__col_logo}`}>
                    <a href="#" className={`${styles.header__logo} ${styles.logo}`}>
                        <img src={require('../../images/logo.png')} alt="logo" />
                    </a>
                </div>
                <div className={styles.header__contacts}>
                    <span className={`${styles.header__icon} ${styles.icon_comment}`}></span>
                    {contacts.map((el) => {
                        return <div key={el.tel} className={`${styles.header__col} ${styles.header__col_contacts}`}>
                            <div className={styles.contacts}>
                                <a href="#" className={styles.contacts__tel}>{el.tel}</a>
                                <div className={styles.contacts__info}>{el.info}</div>
                            </div>
                        </div>
                    })}
                    <div className={`${styles.header__col} ${styles.header__col_contacts}`}>
                        <div className={styles.contacts}>
                            <a href="#" className={styles.link}>Контактная иформация</a>
                        </div>
                    </div>
                </div>
                <div className={`${styles.header__col} ${styles.header__col_basket}`}>
                    <span className={`${styles.header__icon} ${styles.icon_bag}`}></span>
                    <div className={styles.header__basket}>
                        <div className={styles.text}>В вашей корзине</div>
                        <a href="#" className={styles.link}>4 товара на 25196 руб.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMiddle;