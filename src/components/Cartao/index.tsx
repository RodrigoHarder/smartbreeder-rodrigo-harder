import { useState } from "react";
import { useFavorites } from "../../context/favoriteContext";
import type { Categoria, Produto } from "../../types";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Modal } from "../Modal";

interface Props {
  produto: Produto;
  categorias: Categoria[];
}

export function Cartao ({ produto, categorias }: Props){

  const [showModal, setShowModal] = useState(false);
  const { toggleFavorito, favoritos } = useFavorites();
  const isFavorito = favoritos.some(p => p.id === produto.id);

  const nome = produto.nome ?? "Nome desconhecido";
  const preco = produto.preco ? `R$ ${produto.preco}` : "Preço não disponível";

  return (
    <>
      <Card sx={{ width: 250, m: 2 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {nome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {preco}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setShowModal(true)}>
            Ver Detalhes
          </Button>
          <IconButton onClick={() => toggleFavorito(produto)} color="primary">
            {isFavorito ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </CardActions>
      </Card>

      {showModal && (
        <Modal
          produto={produto}
          categorias={categorias}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};
