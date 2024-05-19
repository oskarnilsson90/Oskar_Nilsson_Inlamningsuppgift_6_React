export function handleFormChange(setFormData, formData, resetError) {
    return (event) => {
        const fieldName = event.target.name;
        let fieldValue = event.target.value;

        // Konvertera till nummer där det är nödvändigt
        if (["playersTeam1", "playersTeam2", "goalKeepers", "touchLine", "goalLine", "goals", "cones"].includes(fieldName)) {
            fieldValue = parseInt(fieldValue, 10);
        }

        setFormData({ ...formData, [fieldName]: fieldValue });

        if (resetError) {
            resetError();
        }
    };
}
