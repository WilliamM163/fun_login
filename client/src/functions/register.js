const API_URL = import.meta.env.VITE_API_URL;

const register = async (email, name, password) => {
    console.log('Registering');
    console.log(JSON.stringify({email, name, password}));
    console.log(API_URL + '/user/register');

    const response = await fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, name, password}),
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

export default register;