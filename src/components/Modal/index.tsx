import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import { useFavorites } from "../../context/favoriteContext";
import { Botao } from "../Botao";
import type { ModalProps } from "../../types";
import { TabelaDeVariacoes } from "./TabelaDeVariacoes";
import { DetalhesDoProduto } from "./DetalhesDoProduto";

export function Modal({ produto, categorias, onClose }: ModalProps) {
  const { toggleFavorito, favoritos } = useFavorites();
  const isFavorito = favoritos.some(p => p.id === produto.id);

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{produto.nome ?? "Sem nome"}</DialogTitle>
      <DialogContent dividers>
        <DetalhesDoProduto produto={produto} categorias={categorias} />
        <TabelaDeVariacoes variacoes={produto.variacao} />
      </DialogContent>
      <DialogActions>
        <Botao
          onClick={() => toggleFavorito(produto)}
          variant={isFavorito ? "outlined" : "contained"}
          color={isFavorito ? "secondary" : "primary"}
        >
          {isFavorito ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
        </Botao>

        <Botao onClick={onClose} variant="text">
          Fechar
        </Botao>
      </DialogActions>
    </Dialog>
  );
};
