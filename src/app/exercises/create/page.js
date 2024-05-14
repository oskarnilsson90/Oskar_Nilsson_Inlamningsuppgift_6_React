import CreateExerciseForm from "@/Components/Exercises/CreateExerciseForm";
import styles from "./page.module.css";

export default function CreateExercisePage(){
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Create New Exercise</h1>
            <CreateExerciseForm />
        </div>
    );
}