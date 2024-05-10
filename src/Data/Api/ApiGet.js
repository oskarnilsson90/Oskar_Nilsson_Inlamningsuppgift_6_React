"use client";

import styles from "./ApiGet.module.css"
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function ApiGet() {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://localhost:7034/api/Exercises');
                const jsonData = await response.json();
                setExercises(jsonData);
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
        }
        fetchData();
    }, []);
    const ImageUrl = '/pitch.png';

    return (
        <div className={styles.exercisesGrid}>
            {exercises.map(exercise => (
                <div key={exercise.id} className={styles.exerciseCard}>
                    <Image src={ImageUrl} alt="Exercise Logo" width={100} height={100} className={styles.exerciseImage} />
                    <h2>{exercise.title}</h2>
                    <p>{exercise.category}</p>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.btn}>Add</button>
                        <button className={styles.btn}>Edit</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
