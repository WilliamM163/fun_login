import { useState } from 'react';

import styles from './snake_pass.module.css';
import {formatGridPosition, attachKeyPressListener, attachClickListener} from './snake_functions.js';

function SnakePass({emailCheck}) {
    const [snakePosition, setSnakePosition] = useState({x: 2, y: 7});
    const [button, setButton] = useState({display: true, text: 'Enter Pass'});
    const applePosition = {x: 12, y: 7};

    const handleClick = () => {

        if (emailCheck() === true) { // Email is invalid
            return;
        }

        attachKeyPressListener(snakePosition, applePosition,(x, y) => {
            setSnakePosition({x, y});
        });
        attachClickListener(() => {
            setButton({display: true, text: 'Try Again'});
        });
        setButton((prevState) => {
            return {...prevState, display: false}
        });
    }

    return (
        <div className={styles.body}>
            <div className={styles.snake} style={formatGridPosition(snakePosition)}></div>
            <div className={styles.apple} style={formatGridPosition(applePosition)}></div>
            {button.display ? <button className={styles.play_button} onClick={handleClick}>{button.text}</button> : <></>}
        </div>
    );
}

export default SnakePass;