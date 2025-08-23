import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/Home" element={<HomePage />}></Route>
                <Route path="/Projects" element={<ProjectsPage />}></Route>
                <Route path="/Contact" element={<ContactPage />}></Route>
                <Route
                    path="*"
                    element={<Navigate to="/Home" replace />}
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
