import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./routes/home.jsx";
import Register from "./routes/register.jsx";
import Login from "./routes/login.jsx";
import TestingApi from "./routes/testing_api.jsx";
import Error from "./routes/error.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/testing_api" element={<TestingApi />} />
                <Route path="/error" element={<Error />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
