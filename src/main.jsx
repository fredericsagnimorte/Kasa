import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

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
                        element="<Logement/ id_logement={id_logement}>"
                    ></Route>
                    <Route path="*" element="</Error>"></Route>
                </Routes>
            </main>
            <Footer />
        </Router>
    </StrictMode>,
);
