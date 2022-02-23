import OrderPageContent from './OrderPageContent';
import styles from '../styles/Order.module.css';

const OrderPageContainer = () => {
    return (
        <main className={`${styles.content} ${styles.order_page}`}>
            <OrderPageContent/>
        </main>
    )
}

export default OrderPageContainer;