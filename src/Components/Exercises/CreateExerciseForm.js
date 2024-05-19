"use client"

import { createExercise } from "@/utils/api";
import { handleFormChange } from "@/utils/forms";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "@/components/Exercises/Exercises.module.css";

export default function CreateExerciseForm(){
    
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        playersTeam1: 0,
        playersTeam2: 0,
        goalKeepers: 0,
        touchLine: 0,
        goalLine: 0,
        goals: 0,
        cones: 0
    })

    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
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
            await createExercise(formData);
            router.push("/exercises");
        } catch (error) {
            setErrorMessage("Failed to create exercise.");
        }
    };

    // Clear error message when user starts typing again
    const clearErrorMessage = () => {
        setErrorMessage("");
    };
    
    return (
        <form onChange={handleFormChange(setFormData, formData)} onSubmit={handleFormSubmit} className={styles.exerciseCard}>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="Title" defaultValue={formData.title} name="title" onChange={clearErrorMessage}/>
            
            <label htmlFor="category">Category</label>
            <select id="category" defaultValue={formData.category} name="category" onChange={clearErrorMessage}>
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
            <textarea id="description" placeholder="Description" defaultValue={formData.description} name="description" onChange={clearErrorMessage}/>

            <label htmlFor="playersTeam1">Players Team 1</label>
            <input type="number" id="playersTeam1" placeholder="Players Team 1" defaultValue={formData.playersTeam1} name="playersTeam1" onChange={clearErrorMessage}/>

            <label htmlFor="playersTeam2">Players Team 2</label>
            <input type="number" id="playersTeam2" placeholder="Players Team 2" defaultValue={formData.playersTeam2} name="playersTeam2" onChange={clearErrorMessage}/>

            <label htmlFor="goalKeepers">Goal Keepers</label>
            <input type="number" id="goalKeepers" placeholder="Goal Keepers" defaultValue={formData.goalKeepers} name="goalKeepers" onChange={clearErrorMessage}/>

            <label htmlFor="touchLine">Touch Line</label>
            <input type="number" id="touchLine" placeholder="Touch Line" defaultValue={formData.touchLine} name="touchLine" onChange={clearErrorMessage}/>

            <label htmlFor="goalLine">Goal Line</label>
            <input type="number" id="goalLine" placeholder="Goal Line" defaultValue={formData.goalLine} name="goalLine" onChange={clearErrorMessage}/>

            <label htmlFor="goals">Goals</label>
            <input type="number" id="goals" placeholder="Goals" defaultValue={formData.goals} name="goals" onChange={clearErrorMessage}/>

            <label htmlFor="cones">Cones</label>
            <input type="number" id="cones" placeholder="Cones" defaultValue={formData.cones} name="cones" onChange={clearErrorMessage}/>
    
            <button className={styles.btn} type="submit">Create</button>
        </form>
    );
}
