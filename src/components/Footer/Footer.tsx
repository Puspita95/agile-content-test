import styles from './Footer.module.css';

const Footer: React.FC<{}> = () => {
  const currentYear = new Date().getFullYear();

  return <div className={styles.footerContainer}>
    <div>© Google {currentYear}</div>
    <div>version: 0.1.0</div>
  </div>
};

export default Footer;
