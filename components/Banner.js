import styles from './Banner.module.css';

const Banner = (props) => {
  const handleClick = () => {
    console.log("I've been clicked");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>{' '}
        <span className={styles.title2}>Connoisseur</span>{' '}
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shop</p>
      <div className={styles.buttonWrapper}>
        <button onClick={handleClick} className={styles.button}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
