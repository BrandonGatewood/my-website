import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteTitle: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case "/home":
                document.title = "BG: Home";
                break;
            case "/projects":
                document.title = "BG: Projects";
                break;
            case "/contact":
                document.title = "BG: Contact";
                break;
        }
    }, [location]);

    return null;
};

export default RouteTitle;
