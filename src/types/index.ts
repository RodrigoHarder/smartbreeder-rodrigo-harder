import type { ButtonProps } from "@mui/material";
import type { ReactNode } from "react";

export interface Categoria {
  id: number;
  nome: string;
}

export interface Variacao {
  estoque: string;
  vendedor: string;
  fabricante: string;
  cor: string;
  voltagem: string;
  tamanho: string;
  garantia: string;
  peso: string | null;
  dimensoes: string | null;
}

export interface Produto {
  id: number;
  nome: string | null;
  categorias: number[];
  preco: string | null;
  descricao: string;
  variacao: Variacao[];
}

export interface FiltroProps {
  busca: string;
  setBusca: (value: string) => void;
  categoriaSelecionada: string;
  setCategoriaSelecionada: (value: string) => void;
  valorMin: number;
  valorMax: number;
  handleRangeChange: (_: any, value: number | number[]) => void;
  categorias: { id: number; nome: string }[];
  resetarPagina: () => void;
}

export interface BotaoProps {
  to?: string;
  badgeContent?: number;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  color?: ButtonProps["color"];
  disabled?: boolean;
}

export type Botao =
  | (BotaoProps & {
      iconOnly?: false;
      variant?: ButtonProps["variant"];
    })
  | (BotaoProps & {
      iconOnly: true;
    });

export interface PaginacaoProps {
  paginaAtual: number;
  totalPaginas: number;
  onPaginaChange: (pagina: number) => void;
}

export interface ModalProps {
  produto: Produto;
  categorias: Categoria[];
  onClose: () => void;
}

export interface DetalhesDoProdutoProps {
  produto: Produto;
  categorias: Categoria[];
}