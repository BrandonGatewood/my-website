import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

interface NavLinkProps {
    label: string;
    path: string;
    onClick?: () => void;
    selected: boolean;
    autoFocus?: boolean;
}

const linkButtonSx = {
    color: "#fff",
    textAlign: "center",
    backgroundColor: "transparent",
    "&:hover": {
        color: "var(--color-hover-link)",
        backgroundColor: "transparent",
    },
    "&.Mui-selected": {
        color: "var(--color-active-link)",
        backgroundColor: "transparent",
    },
    "&.Mui-selected:hover": {
        color: "var(--color-hover-link)",
        backgroundColor: "transparent",
    },
};

const NavLink: React.FC<NavLinkProps> = ({
    label,
    path,
    onClick,
    selected,
    autoFocus,
}) => (
    <ListItem disablePadding>
        <ListItemButton
            component={Link}
            to={path}
            onClick={onClick}
            selected={selected}
            autoFocus={autoFocus}
            sx={linkButtonSx}
            aria-current={selected ? "page" : undefined}
        >
            <ListItemText primary={label} />
        </ListItemButton>
    </ListItem>
);

export default NavLink;
