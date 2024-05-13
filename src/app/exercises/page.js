import Link from 'next/link';
import styles from "./page.module.css";


// Component: ExercisesPage
// Description: Represents the Library of Exercises page, displaying a list of exercises with options to add new exercises and edit existing ones.
export default function ExercisesPage() {

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Library of Exercises</h1>
            <Link href={"/exercises"}  className={styles.btn}><span>➕</span> Add New Exercise</Link>
        </div>
    );
}