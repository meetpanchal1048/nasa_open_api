
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.home1}>
        <div className={styles.home2}>
          <div className={styles.homeTitle}>
            <h1>
              NASA Open APIs
            </h1>
          </div>
          <div className={styles.homeGrid}>
            <a href="/MarsRoverNavcam" className={styles.homeGridBox}>Mars Rover NavCam Images </a>
            <a href="/MarsRoverAll" className={styles.homeGridBox}>All Mars Rover Images</a>
          </div>
        </div>
      </div>
    </>
  );
}
