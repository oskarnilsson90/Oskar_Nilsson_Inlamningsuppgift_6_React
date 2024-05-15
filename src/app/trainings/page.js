import Link from 'next/link';
import styles from "./page.module.css";
import Image from "next/image";

// Component: TrainingsPage
// Description: Represents the Trainings Page, displaying a list of trainings with options to add new trainings and start/edit existing ones.
export default function TrainingsPage(){

    // Array of training data
    const trainings = [
        { id: 1, name: 'Training A', team: 'Team A', imageUrl: '/pitch.png', description: 'Description of Training A' },
        { id: 2, name: 'Training B', team: 'Team B', imageUrl: '/pitch.png', description: 'Description of Training B' },
        { id: 3, name: 'Training C', team: 'Team C', imageUrl: '/pitch.png', description: 'Description of Training C' },
        { id: 4, name: 'Training D', team: 'Team D', imageUrl: '/pitch.png', description: 'Description of Training D' },
      ];

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Trainings Page</h1>
            <Link href={"/exercises"}  className={styles.btn}><span>➕</span> Add New Training</Link>
            <div className={styles.trainingsGrid}>
                {trainings.map(training => (
                <div key={training.id} className={styles.trainingCard}>
                    <Image src={training.imageUrl} alt={training.name} width={100} height={100} className={styles.trainingImage} />
                    <h2>{training.name}</h2>
                    <p className={styles.description}>Team: {training.team}</p>
                    <p className={styles.description}>{training.description}</p>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.btn}>Start</button>
                        <button className={styles.btn}>Info</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
