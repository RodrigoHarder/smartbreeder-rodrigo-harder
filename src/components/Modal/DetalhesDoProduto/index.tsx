import { Typography, Chip, Stack } from "@mui/material";
import type { DetalhesDoProdutoProps } from "../../../types";

export function DetalhesDoProduto({ produto, categorias }: DetalhesDoProdutoProps) {
  const nomeCategorias = produto.categorias
    .map(id => categorias.find(c => c.id === id)?.nome)
    .filter(Boolean) as string[];

  return (
    <>
      <Typography gutterBottom>
        <strong>Preço:</strong> {produto.preco ?? "Não disponível"}
      </Typography>

      <Typography gutterBottom>
        <strong>Descrição:</strong> {produto.descricao}
      </Typography>

      <Typography gutterBottom>
        <strong>Categorias:</strong>
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
        {nomeCategorias.map((nome, index) => (
          <Chip key={index} label={nome} color="primary" size="small" />
        ))}
      </Stack>
    </>
  );
}
