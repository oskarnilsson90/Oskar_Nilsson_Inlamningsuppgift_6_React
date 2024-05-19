"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getExerciseById, updateExercise } from "@/utils/api";
import styles from "@/components/Exercises/Exercises.module.css";
import { handleFormChange } from "@/utils/forms";

// Component: EditExerciseForm
// Description: Represents the form for editing exercise details, including title, category, description, and various numerical attributes.
export default function EditExerciseForm({ params }) {
    const router = useRouter();

    // State variables to manage form data and error messages
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        category: "",
        description: "",
        playersTeam1: 0,
        playersTeam2: 0,
        goalKeepers: 0,
        touchLine: 0,
        goalLine: 0,
        goals: 0,
        cones: 0,
    });

    const [errorMessage, setErrorMessage] = useState("");

    // Fetch exercise data based on the exercise ID provided in parameters
    useEffect(() => {
        const fetchExercise = async () => {
            try {
                const exercise = await getExerciseById(params.id);
                setFormData({
                    id: exercise.id || "",
                    title: exercise.title || "",
                    category: exercise.category || "",
                    description: exercise.description || "",
                    playersTeam1: exercise.playersTeam1 || 0,
                    playersTeam2: exercise.playersTeam2 || 0,
                    goalKeepers: exercise.goalKeepers || 0,
                    touchLine: exercise.touchLine || 0,
                    goalLine: exercise.goalLine || 0,
                    goals: exercise.goals || 0,
                    cones: exercise.cones || 0,
                });
            } catch (error) {
                setErrorMessage("Failed to fetch exercise data.");
            }
        };

        fetchExercise();
    }, [params.id]);

    // Handle form submission
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Validate form data
        for (const key in formData) {
            if (formData[key] === "") {
                setErrorMessage("Please fill in all fields.");
                return;
            }
        }

        for (const key in formData) {
            if (typeof formData[key] === "number" && formData[key] < 0) {
                setErrorMessage("Please enter non-negative values for all number fields.");
                return;
            }
        }

        const validations = [
            { field: "playersTeam1", min: 0, max: 50 },
            { field: "playersTeam2", min: 0, max: 50 },
            { field: "goalKeepers", min: 0, max: 10 },
            { field: "touchLine", min: 0, max: 200 },
            { field: "goalLine", min: 0, max: 150 },
            { field: "goals", min: 0, max: 10 },
            { field: "cones", min: 0, max: 100 }
        ];

        for (const validation of validations) {
            const value = formData[validation.field];
            if (value < validation.min || value > validation.max) {
                setErrorMessage(`${validation.field} must be between ${validation.min} and ${validation.max}.`);
                return;
            }
        }

        try {
            // Update exercise data
            await updateExercise(params.id, formData);

            // Redirect to the exercise details page
            router.push(`/exercises/${params.id}`);
        } catch (error) {
            setErrorMessage("Failed to update exercise.");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Edit Exercise</h1>
            <form onChange={handleFormChange(setFormData, formData)} onSubmit={handleFormSubmit} className={styles.exerciseCard}>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                <label htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="Title" value={formData.title} name="title" onChange={handleFormChange(setFormData, formData, () => setErrorMessage(""))}/>
                
                <label htmlFor="category">Category</label>
                <select id="category" value={formData.category} name="category" onChange={handleFormChange(setFormData, formData, () => setErrorMessage(""))}>
                    <option value="">Choose a category</option>
                    <option value="Matches">Matches</option>
                    <option value="Attacking">Attacking</option>
                    <option value="Defending">Defending</option>
                    <option value="Possession">Possession</option>
                    <option value="Technique">Technique</option>
                    <option value="Passing">Passing</option>
                    <option value="Shooting">Shooting</option>
                    <option value="Goalkeeper">Goalkeeper</option>
                    <option value="Conditioning">Conditioning</option>
                </select>

                <label htmlFor="description">Description</label>
                <textarea id="description" placeholder="Description" value={formData.description} name="description" onChange={handleFormChange(setFormData, formData, () => setErrorMessage(""))}/>

                <label htmlFor="playersTeam1">Players Team 1</label>
                <input type="number" id="playersTeam1" placeholder="Players Team 1" value={formData.playersTeam1} name="playersTeam1" onChange={handleFormChange(setFormData, formData, () => setErrorMessage(""))}/>

                <label htmlFor="playersTeam2">Players Team 2</label>
                <input type="number" id="playersTeam2" placeholder="Players Team 2" value={formData.playersTeam2} name="playersTeam2" onChange={handleFormChange(setFormData, formData, () => setErrorMessage(""))}/>

                <label htmlFor="goalKeepers">Goal Keepers</label>
                <input type="number" id="goalKeepers" placeholder="Goal Keepers" value={formData.goalKeepers} name="goalKeepers" onChange={handleFormChange(setFormData, formData, () => setErrorMessage(""))}/>

                <label htmlFor="touchLine">Touch Line</label>
                <input type="number" id="touchLine" placeholder="Touch Line" value={formData.touchLine} name="touchLine" onChange={handleFormChange(setFormData, formData, () => setErrorMessage(""))}/>

                <label htmlFor="goalLine">Goal Line</label>
                <input type="number" id="goalLine" placeholder="Goal Line" value={formData.goalLine} name="goalLine" onChange={handleFormChange(setFormData, formData, () => setErrorMessage(""))}/>

                <label htmlFor="goals">Goals</label>
                <input type="number" id="goals" placeholder="Goals" value={formData.goals} name="goals" onChange={handleFormChange(setFormData, formData, () => setErrorMessage(""))}/>

                <label htmlFor="cones">Cones</label>
                <input type="number" id="cones" placeholder="Cones" value={formData.cones} name="cones" onChange={handleFormChange(setFormData, formData, () => setErrorMessage(""))}/>
        
                <button className={styles.btn} type="submit">Update</button>
            </form>
        </div>
    );
}
