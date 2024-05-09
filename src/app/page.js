import Image from "next/image";
import styles from "./page.module.css";

// Component: Home
// Description: Represents the Home Page of the application, displaying the logo and a description.
export default function Home() {
  return (
    <>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/OIG3.jpg"
          alt="PitchPro planner Logo"
          width={284}
          height={284}
          priority
        />
      </div>

      <div className={styles.center}>
        <p className={styles.description}>An innovative and customizable training planning application</p>
      </div>

      
    </>
  );
}
