import {NavLink} from "react-router";
import SnakePass from "../components/snake_pass.jsx";

import styles from './login_and_register.module.css';

function Register() {
    return (
        <div className={styles.container}>
            <h1>Register</h1>
            <input type='username' className={styles.username} placeholder='Enter Email' />
            <br />
            <div className={styles.space}></div>
            <SnakePass />
            <div className={styles.space}></div>
            <NavLink to={'/login'} className={styles.link}>Already Registered? Login Here</NavLink>
        </div>
    );
}

export default Register;