"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { deleteExercise, getExerciseById } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function ExercisePage({ params }) {

    const router = useRouter();

    const [exercise, setExercise] = useState({});

    const fetchExercise = async () => {
        const exercise = await getExerciseById(params.id);

        setExercise(exercise);
    }

      // Handle the remove button click
  const handleRemoveButtonClick = () => {
    const isConfirmed = window.confirm('Are you sure you want to remove this exercise?');
    if (isConfirmed) {
        deleteThis();
    }
  };

    const deleteThis = async () => {
        await deleteExercise(params.id);
        router.push("/exercises");
    }

    useEffect(() => {
        fetchExercise();
    }, []);

    return (<>

        <div className={styles.exercisesGrid}>
            <div key={exercise.id} className={styles.exerciseCard}>
                <h2>{exercise.title}</h2>
                <h3>{exercise.category}</h3>
                <p>{exercise.description}</p>
                <ul>
                    <li>Players Team 1: {exercise.playersTeam1}</li>
                    <li>Players Team 2: {exercise.playersTeam2}</li>
                    <li>GoalKeepers: {exercise.goalKeepers}</li>
                    <li>TouchLine: {exercise.touchLine}m</li>
                    <li>GoalLine: {exercise.goalLine}m</li>
                    <li>Goals: {exercise.goals}</li>
                    <li>Cones: {exercise.cones}</li>
                </ul>
                
                <div className={styles.buttonsContainer}>
                    <Link href={`/trainings`} className={styles.btn}>Add</Link>
                    <Link href={`/exercises/${exercise.id}/edit`} className={styles.btn}>Edit</Link>
                    <button className={styles.btn} type="button" onClick={handleRemoveButtonClick}>Delete</button>
                </div>
            </div>
        </div>

    </>);
}