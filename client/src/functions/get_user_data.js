const API_URL = import.meta.env.VITE_API_URL;

const getUsersName = async () => {
    const accessToken = localStorage.getItem('access_token');

    const response = await fetch(`${API_URL}/user/info`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            }
        }
    ).then().catch((error) => {
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
        throw error;                        // Implicit Promise.reject(error)
    } else {
        return await response.json();       // Implicit Promise.resolve()
    }
}

export default getUsersName;