import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

// Component: AboutPage
// Description: Represents the About page of the application, providing information about PitchPro Planner and how to contact customer support.
export default function AboutPage(){
    return (
        <div className={styles.container}>
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
            <h1 className={styles.header}>About</h1>
            <div className={styles.section}>
                <h2>Description</h2>
                <p>
                PitchPro Planner is not just a training planning application, but rather a key player in the future of football training.
                Its unique features, user-friendliness, and versatility position the tool as a leading actor in its field and an essential resource for anyone aiming to improve and develop their football skills and teams.
                With PitchPro Planner, the future of football training can be more structured, efficient, and more successful than ever before.
                </p>
            </div>
            <div className={styles.section}>
                <h2>Contact</h2>
                <p>
                    For customer support, please reach out via one of the following methods:
                </p>
                <ul>
                    <li>Chat: <Link href="/"><button className={styles.aboutLink}>Chat whith us</button></Link></li>
                    <li>Email: <Link href="mailto:support@example.com"><button className={styles.aboutLink}>support@example.com</button></Link></li>
                    <li>Phone: +1234567890</li>
                </ul>
            </div>
        </div>
    );
}