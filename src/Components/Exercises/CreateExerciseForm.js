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
        playersTeam1: null,
        playersTeam2: null,
        goalKeepers: null,
        touchLine: null,
        goalLine: null,
        goals: null,
        cones: null
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
    
        try {
            await createExercise(formData);
            router.push("/exercises");
        } catch (error) {
            setErrorMessage("Failed to create exercise.");
        }
    };

    return (
        <form onChange={(e) => handleFormChange(setFormData, formData)(e)} onSubmit={handleFormSubmit} className={styles.exerciseCard}>
            <p className="error">{errorMessage}</p>
            <label>Title</label>
            <input type="text" placeholder="Title" value={formData.title} name="title" onChange={handleFormChange(setFormData, formData)} />
            <label>Category</label>
            <input type="text" placeholder="Category" value={formData.category} name="category" onChange={handleFormChange(setFormData, formData)} />
            <label>Description</label>
            <textarea placeholder="Description" value={formData.description} name="description" onChange={handleFormChange(setFormData, formData)} />
            <label>Players Team 1</label>
            <input type="number" placeholder="Players Team 1" value={formData.playersTeam1} name="playersTeam1" onChange={handleFormChange(setFormData, formData)} />
            <label>Players Team 2</label>
            <input type="number" placeholder="Players Team 2" value={formData.playersTeam2} name="playersTeam2" onChange={handleFormChange(setFormData, formData)} />
            <label>Goal Keepers</label>
            <input type="number" placeholder="Goal Keepers" value={formData.goalKeepers} name="goalKeepers" onChange={handleFormChange(setFormData, formData)} />
            <label>Touch Line</label>
            <input type="number" placeholder="Touch Line" value={formData.touchLine} name="touchLine" onChange={handleFormChange(setFormData, formData)} />
            <label>Goal Line</label>
            <input type="number" placeholder="Goal Line" value={formData.goalLine} name="goalLine" onChange={handleFormChange(setFormData, formData)} />
            <label>Goals</label>
            <input type="number" placeholder="Goals" value={formData.goals} name="goals" onChange={handleFormChange(setFormData, formData)} />
            <label>Cones</label>
            <input type="number" placeholder="Cones" value={formData.cones} name="cones" onChange={handleFormChange(setFormData, formData)} />
            <button className={styles.btn} type="submit">Create</button>
        </form>
    );
}
