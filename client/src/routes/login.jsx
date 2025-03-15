import {NavLink} from "react-router";
import SnakePass from "../components/snake_pass.jsx";

import styles from './login_and_register.module.css'

function Login() {
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <input type='username' className={styles.username} placeholder='Enter Email' />
            <br />
            <div className={styles.space}></div>
            <SnakePass />
            <div className={styles.space}></div>
            <NavLink to={'/register'} className={styles.link}>Don't have an account? Register Here</NavLink>
        </div>
    );
}

export default Login;