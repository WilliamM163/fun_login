import {useState, useRef} from 'react';
import {NavLink} from "react-router";
import SnakePass from "../components/snake_pass.jsx";

import styles from './login_and_register.module.css';

function Register() {
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
            <h1>Register</h1>
            <input type='username' className={styles.username} ref={emailRef} placeholder='Enter Email' />
            <br />
            {isEmailInvalid ? <p>Please enter a valid email</p> : <></>}
            <div className={styles.space}></div>
            <SnakePass emailCheck={emailCheck}/>
            <div className={styles.space}></div>
            <NavLink to={'/login'} className={styles.link}>Already Registered? Login Here</NavLink>
        </div>
    );
}

export default Register;