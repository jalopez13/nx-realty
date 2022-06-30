import styles from './footer.module.css';  

/* eslint-disable-next-line */
export interface FooterProps {
}

export const Footer = (props: FooterProps) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Footer!</h1>     
    </div>
  );
};


export default Footer;
