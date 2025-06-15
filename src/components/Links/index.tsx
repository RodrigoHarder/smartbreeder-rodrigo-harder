import { Typography, Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const navLinks = [
    { label: "Produtos", to: "/" },
    { label: "Favoritos", to: "/favoritos" },
];

export function Links() {
    const theme = useTheme();

    return (
        <Box sx={{ display: "flex", gap: 2 }}>
            {navLinks.map(({ label, to }) => (
                <Typography
                    key={to}
                    component={Link}
                    to={to}
                    variant="body1"
                    sx={{
                        fontWeight: 500,
                        color: "text.secondary",
                        textDecoration: "none",
                        transition: "color 0.3s",
                        "&:hover": { color: theme.palette.primary.main },
                    }}
                >
                    {label}
                </Typography>
            ))}
        </Box>
    );
};
