import Link from 'next/link';
import styles from "./page.module.css";
import Image from 'next/image';


// Component: ExercisesPage
// Description: Represents the Library of Exercises page, displaying a list of exercises with options to add new exercises and edit existing ones.
export default function ExercisesPage() {

    // Array of exercises data
    const exercises = [
        { id: 1, type: 'Exercise A', imageUrl: '/pitch.png', description: 'Description of Exercise A' },
        { id: 2, type: 'Exercise B', imageUrl: '/pitch.png', description: 'Description of Exercise B' },
        { id: 3, type: 'Exercise C', imageUrl: '/pitch.png', description: 'Description of Exercise C' },
        { id: 4, type: 'Exercise D', imageUrl: '/pitch.png', description: 'Description of Exercise D' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Library of Exercises</h1>
            <Link href={"/exercises"}  className={styles.btn}><span>➕</span> Add New Exercise</Link>
            <div className={styles.exercisesGrid}>
                {exercises.map(exercise => (
                    <div key={exercise.id} className={styles.exerciseCard}>
                        <Image src={exercise.imageUrl} alt={exercise.type} width={100} height={100} className={styles.exerciseImage} />
                        <h2>{exercise.type}</h2>
                        <p className={styles.description}>{exercise.description}</p>
                        <div className={styles.buttonsContainer}>
                            <button className={styles.btn}>Add</button>
                            <button className={styles.btn}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}