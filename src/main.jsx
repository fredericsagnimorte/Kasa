import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element=""></Route>
                <Route path="/a_propos" element=""></Route>
                <Route path="/:id_appartement" element=""></Route>
                <Route path="*" element=""></Route>
            </Routes>
        </Router>
    </StrictMode>,
);
