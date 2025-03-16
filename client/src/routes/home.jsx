import {useEffect, useState} from "react";
import { useNavigate } from "react-router";

import styles from './styles.module.css'
import getUsersName from "../functions/get_user_data.js";

function Home() {
    const [info, setInfo] = useState({loading: true, text: ''});
    const navigate = useNavigate();
    const access_token = localStorage.getItem('access_token');

    const logout = () => {
        localStorage.removeItem('access_token');
        navigate('/register');
    }

    // Checks whether the user is logged in on first render
    useEffect(() => {
        if (access_token === null) {
            navigate('/register');
        } else {
            getUsersName().then(
                (result) => {
                    setInfo({loading: false, text: result.name});
                },
                (error) => {
                    const statusCode = error.content.status;
                    if (statusCode === 400 || statusCode === 401) localStorage.removeItem('access_token');
                    navigate('/error', {state: error.content});
                }
            )
        }
    }, []);

    if (info.loading) {
        return (
            <div className={styles.container}>
                <h1>Loading ...</h1>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <h1>Welcome in {info.text}</h1>
            <button onClick={logout} className={styles.button}>Logout</button>
        </div>
    )
}

export default Home;