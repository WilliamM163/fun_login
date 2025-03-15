import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import Chat from "./routes/chat.jsx";
import Register from "./routes/register.jsx";
import Login from "./routes/login.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />}/>
        </Routes>
    </BrowserRouter>
)
