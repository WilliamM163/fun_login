import {useState, useRef} from 'react';
import {NavLink, useNavigate} from "react-router";

import styles from './styles.module.css';

import SnakePass from "../components/snake_pass.jsx";
import register from '../functions/register.js';

function Register() {
    const [inputs, setInputs] = useState({inValid: false, error: ''});
    const emailRef = useRef();
    const nameRef = useRef();
    const navigate = useNavigate();

    const checkInputs = () => {
        if (emailRef.current.value === '' && nameRef.current.value === '') {
            setInputs({inValid: true, error: 'Please input a valid email and name'});
            return true;
        } else if (emailRef.current.value === '') {
            setInputs({inValid: true, error: 'Please input a valid email'});
            return true;
        } else if (nameRef.current.value === '') {
            setInputs({inValid: true, error: 'Please input a valid name'});
            return true;
        } else {
            setInputs((prevState) => {return {...prevState, inValid: false}});
            return false;
        }
    };

    const onRegister = (password) => {
        console.log({email: emailRef.current.value, name: nameRef.current.value, password});
        register(emailRef.current.value, nameRef.current.value, password).then(
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
            <h1>Register</h1>
            <input type='email' className={styles.input} ref={emailRef} placeholder='Enter Email' />
            <div className={styles.space}></div>
            <input type='text' className={styles.input} ref={nameRef} placeholder='Enter Name' />
            <br />
            {inputs.inValid ? <p>{inputs.error}</p> : <></>}
            <div className={styles.space}></div>
            <SnakePass inputChecks={checkInputs} authenticate={onRegister}/>
            <div className={styles.space}></div>
            <NavLink to={'/login'} className={styles.link}>Already Registered? Login Here</NavLink>
        </div>
    );
}

export default Register;