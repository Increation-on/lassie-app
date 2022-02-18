import styles from '../styles/Footer.module.css';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            Footer
            <FooterTop/>
            <FooterBottom/>
        </footer>
    )
}

export default Footer;