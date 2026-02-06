import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Logement from "./pages/Logement/Logement";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={"<About/>"}></Route>
                    <Route
                        path="/logement/:id_logement"
                        element={<Logement />}
                    ></Route>
                    <Route path="/error_404" element="</Error>"></Route>
                    <Route
                        path="*"
                        element={<Navigate to="/error_404" replace />}
                    />
                </Routes>
            </main>
            <Footer />
        </Router>
    </StrictMode>,
);
