import { useEffect } from "react";
import { useNavigate } from "react-router";

function Chat() {
    const navigate = useNavigate();
    const access_token = localStorage.getItem('access_token');

    // Checks whether the user is logged in on first render
    useEffect(() => {
        if (access_token === null) {
            navigate('/register');
        }
    }, []);

    return (
        <>
            <h1>Chat</h1>
        </>
    )
}

export default Chat;