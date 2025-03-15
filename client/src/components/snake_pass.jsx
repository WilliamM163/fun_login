import { useState } from 'react';

import styles from './snake_pass.module.css';
import {formatGridPosition, attachKeyPressListener, attachClickListener} from './snake_functions.js';

function SnakePass() {
    const [snakePosition, setSnakePosition] = useState({x: 2, y: 7});
    const [button, setButton] = useState({displayButton: true, text: 'Enter Pass'});
    const applePosition = {x: 12, y: 7};


    const handleClick = () => {
        attachKeyPressListener(snakePosition, applePosition,(x, y) => {
            setSnakePosition({x, y});
        });
        attachClickListener(() => {
            setButton({displayButton: true, text: 'Try Again'});
        });
        setButton((prevState) => {
            return {...prevState, displayButton: false}
        });
    }

    return (
        <div className={styles.body}>
            <div className={styles.snake} style={formatGridPosition(snakePosition)}></div>
            <div className={styles.apple} style={formatGridPosition(applePosition)}></div>
            {button.displayButton ? <button className={styles.play_button} onClick={handleClick}>{button.text}</button> : <></>}
        </div>
    );
}

export default SnakePass;