"use client"

import { getExercises } from "@/utils/api";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/components/Exercises/Exercises.module.css";

// Component: ExercisesList
// Description: Represents a list of exercises with search functionality and links to view exercise details.
export default function ExercisesList() {
    // State variables to manage exercises data and search term
    const [exercises, setExercises] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Function to fetch exercises data
    const fetchExercises = async () => {
        const exercisesData = await getExercises();
        setExercises(exercisesData);
    }

    useEffect(() => {
        // Fetch exercises data when component mounts
        fetchExercises();
    }, []);

    // Event handler for search input
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter exercises based on search term
    const filteredExercises = exercises.filter((exercise) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            exercise.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            exercise.category.toLowerCase().includes(lowerCaseSearchTerm)
        );
    });

    // Placeholder URL for exercise image
    const ImageUrl = '/pitch.png';

    return (
        <>
            <div>
                <input
                    className={styles.searchBar}
                    type="text"
                    placeholder="Search exercises..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className={styles.exercisesGrid}>
                {filteredExercises.map(exercise => (
                    <div key={exercise.id} className={styles.exerciseCard}>
                        <Image src={ImageUrl} alt="Exercise Logo" width={100} height={100} className={styles.exerciseImage} />
                        <h2>{exercise.title}</h2>
                        <p>{exercise.category}</p>
                        <div className={styles.buttonsContainer}>
                            <Link href={`trainings`} className={styles.btn}>Add</Link>
                            <Link href={`/exercises/${exercise.id}`} className={styles.btn}>Info</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
