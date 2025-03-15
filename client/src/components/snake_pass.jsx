import { useState } from 'react';

import styles from './snake_pass.module.css';
import {formatGridPosition} from './grid_position.js';

function SnakePass() {
    const [snakePosition, setSnakePosition] = useState({x: 2, y:7});
    const applePosition = {x: 12, y: 7};

    return (
        <div className={styles.body}>
            <div className={styles.snake} style={formatGridPosition(snakePosition)}></div>
            <div className={styles.apple} style={formatGridPosition(applePosition)}></div>
            <button className={styles.play_button}>Enter Pass</button>
        </div>
    );
}

export default SnakePass;