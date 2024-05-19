import CreateExerciseForm from "@/Components/Exercises/CreateExerciseForm";
import styles from "./page.module.css";

// Component: CreateExercisePage
// Description: Represents the page for creating a new exercise, providing a form to input exercise details.
export default function CreateExercisePage(){
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Create New Exercise</h1>
            <CreateExerciseForm />
        </div>
    );
}