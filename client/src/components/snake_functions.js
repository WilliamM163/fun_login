const formatGridPosition = ({x, y}) => {
    return { gridArea: `${-y} / ${x} / ${-y - 1} / ${x + 1}`}
}

// Handling Key Presses
let positionOfApple;        //Object containing x and y co-ordinates
let currentSnakePosition;   //Object containing x and y co-ordinates
let moveSnake;              //Function takes in new x and y and reloads app state
let authenticate;            //Function which is used to authenticate when snake reaches the apple
var pass = '';       //String which contains the unique combination

const keyDownHandler = (event) => {
    const key = event.key.toLowerCase();
    if (key === 'escape') {
        reset();
    } else if (key === 'arrowup' || key === 'w') {
        pass += 'U';
        currentSnakePosition.y += 1;
        const {x, y} = currentSnakePosition;
        moveSnake(x, y);
    } else if (key === 'arrowright' || key === 'd') {
        pass += 'R';
        currentSnakePosition.x += 1;
        const {x, y} = currentSnakePosition;
        moveSnake(x, y);
    } else if (key === 'arrowdown' || key === 's') {
        pass += 'D'
        currentSnakePosition.y -= 1;
        const {x, y} = currentSnakePosition;
        moveSnake(x, y);
    } else if (key === 'arrowleft' || key === 'a') {
        pass += 'L';
        currentSnakePosition.x -= 1;
        const {x, y} = currentSnakePosition;
        moveSnake(x, y);
    }
    // Comparing currentSnakePosition to positionOfApple
    if (JSON.stringify(currentSnakePosition) === JSON.stringify(positionOfApple)) {
        authenticate(pass);
        reset();
    }
}

const removeKeyPressListener = () => {
    document.removeEventListener('keydown', keyDownHandler);
    console.log('Removed Key Down Event Listener');
}

const attachKeyPressListener = (snakeCoordinates, appleCoordinates, onKeyPress, authenticateFunc) => {
    currentSnakePosition = snakeCoordinates;
    positionOfApple = appleCoordinates;
    moveSnake = onKeyPress;
    authenticate = authenticateFunc;
    document.addEventListener('keydown', keyDownHandler);
    console.log('Added Key Down Event Listener')
}

// Handling Clicks | Deals with removing event listeners when user changes focus
let revealButton;
const reset = () => {
    removeKeyPressListener();
    removeClickListener();
    currentSnakePosition = null;
    pass = '';
    moveSnake(2, 7);    // Moved back to default position
    revealButton();
}

const removeClickListener = () => {
    document.removeEventListener('click', reset);
    console.log('Removed Click Event Listener');
}

const attachClickListener = (onClick) => {
    revealButton = onClick;
    setTimeout(() => {
        document.addEventListener('click', reset);
        console.log('Added Click Event Listener');
    }, 5);
}

// Exports
export { formatGridPosition, attachKeyPressListener, attachClickListener};