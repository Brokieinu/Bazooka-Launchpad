import styles from '@/styles/intro.module.css';

const IntroText = () => {
  return (
    <div className={styles.introText}>
      <h1>BAZOOKA LAUNCHPAD</h1>
      <p>
        Brokie Inu is about to drop a one-of-a-kind, automated, curated
        launchpad to support projects building on the TON chain.
      </p>
      <div className={styles.buttonWrapper}>
        <button>Find Projects</button>
      </div>
    </div>
  );
};

export default IntroText;
