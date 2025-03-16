const API_URL = import.meta.env.VITE_API_URL;

const login = async (email, password) => {
    console.log('Logging In');
    console.log(JSON.stringify({email, password}));
    console.log(API_URL + '/user/login');

    const response = await fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password}),
    }).then().catch((error) => {
        error.content = {status: 503, message: 'Server is unreachable'}
        throw error;
    });

    if (!response.ok) {
        const body = await response.json();
        const errorMessage = body.error;
        const error = new Error(
            `Response status: ${response.status}, Error: ${errorMessage}`
        );
        error.content = {status: response.status, message: errorMessage};
        throw error;                    // Implicit Promise.reject(error)
    } else {
        return await response.json();   // Implicit Promise.resolve()
    }
}

export default login;