const API_URL = process.env.NEXT_PUBLIC_API_URL;

const jsonHeaders = {
    "Content-Type": "application/json"
};

export async function createExercise(title) {
    const url = API_URL + "/api/Exercises";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            ...jsonHeaders
        },
        body: JSON.stringify({ title })
    });

    return response.json();
}


export async function getExercises() {
    const url = API_URL + "/api/Exercises";

    const response = await fetch(url, {
    });

    return response.json();
}


export async function getExerciseById(id) {
    const url = API_URL + "/api/Exercises/" + id;

    const response = await fetch(url, {
    });

    return response.json();
}

export async function updateExercise(id){
    const url = API_URL + "/api/Exercises/" + id;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            ...jsonHeaders
        },
        body: JSON.stringify(todo)
    });

    return response.ok;
}

export async function deleteExercise(id){
    const url = API_URL + "/api/Exercises/" + id;

    const response = await fetch(url, {
        method: "DELETE",
    });

    return response.ok;
}
