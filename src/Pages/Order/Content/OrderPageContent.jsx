import styles from '../styles/Order.module.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const OrderPageContent = () => {

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
        watch
    } = useForm({
        mode: 'onChange'
    });

    const [toggleErr, setToggleErr] = useState(true);
    

    return (
        <div className={styles.container}>
            <ul className={styles.breadcrumbs}>
                <li className={styles.breadcrumbs__item}>
                    <Link to='/main' class={styles.breadcrumbs__name}>Главная</Link>
                </li>
                <li className={styles.breadcrumbs__item}>
                    <a href="#" class={styles.breadcrumbs__name}>Аксессуары</a>
                </li>
                <li className={styles.breadcrumbs__item}>
                    <a href="#" class={styles.breadcrumbs__name}>Головные уборы</a>
                </li>
            </ul>
            <h1 className={styles.title}>Оформление заказа</h1>
            <form onSubmit={handleSubmit} className={`${styles.form} ${styles.form_validate} ${styles.order_page__form}`}>
                <fieldset className={styles.form__fieldset}>
                    <legend className={styles.form__title}>Информация о покупателе</legend>
                    <div className={styles.form__row}>
                        <div className={`${styles.form__col} ${styles.form__col_width_220}`}>
                            <label className={`${styles.form__label} ${errors.order_name? styles.label_invalid : styles.form__label}`} htmlFor="order_name">Фамилия, Имя, Отчество</label>
                        </div>
                        <div className={`${styles.form__col} ${styles.form__col_width_375}`}>
                            <input className={`${styles.input} ${errors.order_name ? styles.invalid : styles.input} `} type="text"
                                {...register('order_name', {
                                    required: "Пожалуйста, заполните это поле",
                                })}
                            />
                            {errors.order_name && toggleErr?<div className={styles.form__error_wrapper}>
                                <label class={`${styles.form__error} ${styles.form__label_invalid}`} htmlFor="order_name">
                                    Пожайлуйста, заполните это поле
                                </label>
                                <span onClick={()=>setToggleErr(false)} className={styles.form__error_hide}></span>
                            </div>: null}
                            
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default OrderPageContent;