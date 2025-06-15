import { Box, Typography } from "@mui/material";
import { useFavorites } from "../../context/favoriteContext";
import { useProdutos } from "../../hooks/useProdutos";
import { Cartao } from "../../components/Cartao";

export const Favoritados = () => {
  const { favoritos } = useFavorites();
  const { categorias } = useProdutos();

  if (favoritos.length === 0)
    return (
      <Box pt={12} textAlign="center">
        <Typography variant="h6">Nenhum favorito.</Typography>
      </Box>
    );

  return (
    <Box pt={12} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" gutterBottom>
        Favoritos
      </Typography>

      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
        {favoritos.map((p) => (
          <Cartao key={p.id} produto={p} categorias={categorias} />
        ))}
      </Box>
    </Box>
  );
};
