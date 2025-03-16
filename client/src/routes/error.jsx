import {useNavigate, useLocation} from "react-router";

import styles from './styles.module.css';

function Error() {
    let navigate = useNavigate();
    const location = useLocation();
    const error = location.state;

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className={styles.container}>
            <p>Status: {error.status}</p>
            <p>Error: {error.message}</p>
            <button onClick={handleGoBack} className={styles.button}>Go back</button>
        </div>
    )
}

export default Error;