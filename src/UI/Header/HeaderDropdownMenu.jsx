import styles from '../styles/Header.module.css';
import { useState } from 'react';

const HeaderDropdownMenu = (props) => {

    const [show, setShow] = useState(true);
    
    return (
        <ul className={show?styles.dropdown_menu:styles.dropdown_menu_hidden}>
            <li className={styles.dropdown_menu__content}>
                <div className={styles.dropdown_menu__img}>
                    <img src={require('../../images/header-submenu-1.jpg')} alt="child" />
                </div>
                <div className={styles.dropdown_menu__menu_col}>
                    <ul className={styles.vertical_menu}>
                        <li className={styles.vertical_menu__item}>
                            <span className={styles.vertical_menu__name}>Варежки</span>
                            <ul className={styles.vertical_menu__submenu}>
                                <li className={styles.vertical_menu__submenu_item}>
                                    <a href="#" className={`${styles.link} ${styles.vertical_menu__submenu_name}`}>
                                        Демисезонные
                                    </a>
                                </li>
                                <li className={styles.vertical_menu__submenu_item}>
                                    <a href="#" className={`${styles.link} ${styles.vertical_menu__submenu_name}`}>
                                        Для новорожденных
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.vertical_menu__item}>
                            <a href="#" className={styles.vertical_menu__name}>Горловина и шарфы</a>
                        </li>
                        <li className={styles.vertical_menu__item}>
                            <a href="#" className={styles.vertical_menu__name}>Носки</a>
                        </li>
                        <li className={styles.vertical_menu__item}>
                            <span className={styles.vertical_menu__name}>Перчатки</span>
                            <ul className={styles.vertical_menu__submenu}>
                                <li className={styles.vertical_menu__submenu_item}>
                                    <a href="#" className={`${styles.link} ${styles.vertical_menu__submenu_name}`}>
                                        Демисезонные
                                    </a>
                                </li>
                                <li className={styles.vertical_menu__submenu_item}>
                                    <a href="#" className={`${styles.link} ${styles.vertical_menu__submenu_name}`}>
                                        Зимние
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default HeaderDropdownMenu;