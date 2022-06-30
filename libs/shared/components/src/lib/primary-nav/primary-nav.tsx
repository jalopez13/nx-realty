import styles from './primary-nav.module.css';
  
/* eslint-disable-next-line */
export interface PrimaryNavProps {
}

export const PrimaryNav = (props: PrimaryNavProps) => {
  return (
    <div className={styles['container']}>
      
      <h1>Welcome to PrimaryNav!</h1>
      
    </div>
  );
};

export default PrimaryNav;