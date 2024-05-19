// Function: handleFormChange
// Description: Returns a function that handles form input changes and updates the form data accordingly.
// Parameters:
// - setFormData: Function to set the form data state.
// - formData: Current form data state.
// - resetError: Optional function to reset error state.
// Returns: A function that handles form input changes.
export function handleFormChange(setFormData, formData, resetError) {
    return (event) => {
        const fieldName = event.target.name;
        let fieldValue = event.target.value;

        // Convert certain fields to integers if necessary
        if (["playersTeam1", "playersTeam2", "goalKeepers", "touchLine", "goalLine", "goals", "cones"].includes(fieldName)) {
            fieldValue = parseInt(fieldValue, 10);
        }

        // Update form data state with the new field value
        setFormData({ ...formData, [fieldName]: fieldValue });

        // Reset error message if provided
        if (resetError) {
            resetError();
        }
    };
}
