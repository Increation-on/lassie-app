import { useState } from 'react';
import styles from '../styles/Header.module.css';
import HeaderDropdownMenu from './HeaderDropdownMenu';



const HeaderBottom = () => {

    const menuItems = [
        { title: "Коллекции" },
        { title: "Верхняя одежда" },
        { title: "Игра слоями" },
        { title: "Для прогулки и спорта" },
        { title: "Летняя одежда" },
        { title: "Обувь" },
        { title: "Аксессуары" },
        { title: "Для новорожденных" }
    ]

    const [hover, setHover] = useState(false);
    

    return (
        <div className={styles.header__bottom}>
            <div className={styles.container}>
                <nav className={`${styles.header__nav} ${styles.navigation}`}>
                    <ul className={`${styles.header__menu} ${styles.menu} ${styles.menu_width_full}`}>
                        {menuItems.map((el) => {
                            return (
                                <li onMouseOver={()=>{setHover(true)}} onMouseOut={()=>{setHover(false)}} className={styles.menu__item} key={el.title}>
                                    <a href="#" className={styles.menu__name}>{el.title}</a>
                                   {hover?<HeaderDropdownMenu/>:null}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HeaderBottom;