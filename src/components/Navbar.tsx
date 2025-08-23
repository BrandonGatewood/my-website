import {
    AppBar,
    Drawer,
    IconButton,
    List,
    Stack,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import type React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import NavLink from "./NavLink";

interface LinkItem {
    label: string;
    path: string;
}

const links: LinkItem[] = [
    { label: "Home", path: "/home" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const location = useLocation();

    return (
        <>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar sx={{ px: 2 }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        BG
                    </Typography>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={toggleDrawer}
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            aria-controls="navbar-menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Stack direction="row" spacing={3}>
                            {links.map((item) => (
                                <NavLink
                                    key={item.label}
                                    label={item.label}
                                    path={item.path}
                                    selected={location.pathname === item.path}
                                />
                            ))}
                        </Stack>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                id="navbar-menu"
                anchor="right"
                open={open}
                onClose={toggleDrawer}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: "var(--color-background)",
                            px: 2,
                        },
                    },
                }}
            >
                <List>
                    {links.map((item, index) => (
                        <NavLink
                            key={item.label}
                            label={item.label}
                            path={item.path}
                            onClick={toggleDrawer}
                            selected={location.pathname === item.path}
                            autoFocus={index === 0 && open}
                        />
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
