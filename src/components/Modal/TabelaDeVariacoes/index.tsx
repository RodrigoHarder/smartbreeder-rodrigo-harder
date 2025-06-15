import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import type { Variacao } from "../../../types";

export function TabelaDeVariacoes({ variacoes }: { variacoes: Variacao[] }) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Variações
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Cor</TableCell>
            <TableCell>Voltagem</TableCell>
            <TableCell>Tamanho</TableCell>
            <TableCell>Vendedor</TableCell>
            <TableCell>Fabricante</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {variacoes.map((v, i) => (
            <TableRow key={i}>
              <TableCell>{v.cor}</TableCell>
              <TableCell>{v.voltagem}</TableCell>
              <TableCell>{v.tamanho}</TableCell>
              <TableCell>{v.vendedor}</TableCell>
              <TableCell>{v.fabricante}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
