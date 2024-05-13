"use client";

import { getExercises } from "@/utils/api";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/components/Exercises/Exercises.module.css";

export default function ExercisesList() {
    const [exercises, setExercises] = useState([]);

    const fetchExercises = async () => {
        const exercises = await getExercises();
        setExercises(exercises);
    }

    useEffect(() => {
        fetchExercises();
    }, []);

    const ImageUrl = '/pitch.png';

    return (<div className={styles.exercisesGrid}>
            {exercises.map(exercise => (
                <Link href={`/exercises/${exercise.id}`} key={exercise.id} className={styles.exerciseCard}>
                    <Image src={ImageUrl} alt="Exercise Logo" width={100} height={100} className={styles.exerciseImage} />
                    <h2>{exercise.title}</h2>
                    <p>{exercise.category}</p>
                    <div className={styles.buttonsContainer}>
                        <Link href={`trainings`} className={styles.btn}>Add</Link>
                        <Link href={`/exercises/${exercise.id}`} className={styles.btn}>Edit</Link>
                    </div>
                </Link>
            ))}
        </div>
    
    
    //<ul className={styles.todosList}>
        //{todos.map((todo) => (
            //<li key={todo.id} className={todo.done ? styles.done : ""}>
                //<Link href={`/todos/${todo.id}`}>
                    
                    //{todo.title}
                //</Link>
            //</li>
       // ))}
    //</ul>);
    );
}