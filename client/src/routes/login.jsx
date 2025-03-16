import {useState, useRef} from 'react';
import {NavLink} from "react-router";
import SnakePass from "../components/snake_pass.jsx";

import styles from './styles.module.css';

function Login() {
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const emailRef = useRef();
    const emailCheck = () => {
        if (emailRef.current.value === '') {
            setIsEmailInvalid(true);
            return true;
        } else {
            setIsEmailInvalid(false);
            return false;
        }
    };

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <input type='email' className={styles.input} ref={emailRef} placeholder='Enter Email' />
            <br />
            {isEmailInvalid ? <p>Please enter a valid email</p> : <></>}
            <div className={styles.space}></div>
            <SnakePass inputChecks={emailCheck} />
            <div className={styles.space}></div>
            <NavLink to={'/register'} className={styles.link}>Don't have an account? Register Here</NavLink>
        </div>
    );
}

export default Login;