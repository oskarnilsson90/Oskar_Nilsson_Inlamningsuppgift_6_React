export function handleFormChange(setFormData, formData) {
    return (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setFormData({ ...formData, [fieldName]: fieldValue });
    };
}
