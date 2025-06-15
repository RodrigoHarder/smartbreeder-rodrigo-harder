import { Box, Pagination } from "@mui/material";
import type { PaginacaoProps } from "../../types";

export const Paginacao = ({ paginaAtual, totalPaginas, onPaginaChange }: PaginacaoProps) => {
  if (totalPaginas <= 1) return null;

  return (
    <Box mt={3} display="flex" justifyContent="center">
      <Pagination
        count={totalPaginas}
        page={paginaAtual}
        onChange={(_, novaPagina) => onPaginaChange(novaPagina)}
        color="primary"
      />
    </Box>
  );
};
