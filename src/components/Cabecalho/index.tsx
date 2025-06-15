import { AppBar, Toolbar, Box } from "@mui/material";
import { Logo } from "../Logo";
import { Links } from "../Links";
import { Botao } from "../Botao";
import { useFavorites } from "../../context/favoriteContext";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function Cabecalho(){
  const { favoritos } = useFavorites();

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={2}
      sx={{ mb: 4, px: 3, py: 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        <Logo />
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Links />
          <Botao
            to="/favoritos"
            iconOnly
            icon={<FavoriteIcon />}
            badgeContent={favoritos.length}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
