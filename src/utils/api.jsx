const API_URL = process.env.NEXT_PUBLIC_API_URL;

const jsonHeaders = {
    "Content-Type": "application/json"
};

// Function: createExercise
// Description: Sends a POST request to create a new exercise.
export async function createExercise(formData) {
    const url = API_URL + "/api/Exercises";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            ...jsonHeaders
        },
        body: JSON.stringify(formData)
    });

    return response.json();
}

// Function: getExercises
// Description: Sends a GET request to fetch all exercises.
export async function getExercises() {
    const url = API_URL + "/api/Exercises";

    const response = await fetch(url, {
    });

    return response.json();
}

// Function: getExerciseById
// Description: Sends a GET request to fetch a specific exercise by its ID.
export async function getExerciseById(id) {
    const url = API_URL + "/api/Exercises/" + id;

    const response = await fetch(url, {
    });

    return response.json();
}

// Function: updateExercise
// Description: Sends a PUT request to update an existing exercise.
export async function updateExercise(id, formData){
    const url = API_URL + "/api/Exercises/" + id;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            ...jsonHeaders
        },
        body: JSON.stringify(formData)
    });

    return response.ok;
}

// Function: deleteExercise
// Description: Sends a DELETE request to delete an existing exercise by its ID.
export async function deleteExercise(id){
    const url = API_URL + "/api/Exercises/" + id;

    const response = await fetch(url, {
        method: "DELETE",
    });

    return response.ok;
}
