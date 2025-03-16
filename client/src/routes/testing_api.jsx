import {useState} from "react";
import {useNavigate} from "react-router";

import login from '../functions/login.js';
import register from '../functions/register.js'

import styles from './testing_api.module.css';

function TestingApi() {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Handling Successes and Errors
    const onSuccess = (response) => {
        const {accessToken} = response;
        localStorage.setItem('access_token', accessToken);
        navigate('/');
    }

    const onError = (error) => {
        console.error(error.message);
        navigate('/error', {state: error.content}); // Redirects User to error screen
    }


    const onRegister = () => {
        setLoading(true);
        register('william.massey.163@gmail.com', 'William Massey', 'UUDDLUDRRRRDUURRR').then(
            onSuccess, onError
        );
    //     In the meantime lets redirect to the loading screen
    }
    const onLogin = () => {
        setLoading(true);
        login('william.massey.163@gmail.com', 'UUDDLUDRRRRDUURRR').then(
            onSuccess, onError
        );
    //     In the meantime lets redirect to the loading screen
    }

    // Rendering Elements to Screen
    if (loading) {
        return (
            <div className={styles.container}>
                <h1>Loading ...</h1>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={onRegister}>Register</button>
            <br />
            <button className={styles.button} onClick={onLogin}>Login</button>
        </div>
    );
}

export default TestingApi;