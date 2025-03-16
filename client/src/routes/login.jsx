import {useState, useRef} from 'react';
import {NavLink, useNavigate} from "react-router";

import styles from './styles.module.css';

import SnakePass from "../components/snake_pass.jsx";
import login from '../functions/login.js';

function Login() {
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const emailRef = useRef();
    const navigate = useNavigate();

    const emailCheck = () => {
        if (emailRef.current.value === '') {
            setIsEmailInvalid(true);
            return true;
        } else {
            setIsEmailInvalid(false);
            return false;
        }
    };

    const onLogin = (password) => {
        console.log({email: emailRef.current.value, password});
        login(emailRef.current.value, password).then(
            // onSuccess
            (response) => {
                const {accessToken} = response;
                localStorage.setItem('access_token', accessToken);
                navigate('/');
            },
            // onFail
            (error) => {
                console.error(error.message);
                navigate('/error', {state: error.content}); // Redirects User to error screen
            }
        );
    }

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <input type='email' className={styles.input} ref={emailRef} placeholder='Enter Email' />
            <br />
            {isEmailInvalid ? <p>Please enter a valid email</p> : <></>}
            <div className={styles.space}></div>
            <SnakePass inputChecks={emailCheck} authenticate={onLogin} />
            <div className={styles.space}></div>
            <NavLink to={'/register'} className={styles.link}>Don't have an account? Register Here</NavLink>
        </div>
    );
}

export default Login;