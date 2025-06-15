import { useState, useMemo } from "react";
import type { Produto } from "../types";

export const useFiltros = (produtos: Produto[]) => {
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [valorMin, setValorMin] = useState(0);
  const [valorMax, setValorMax] = useState(10000);
  const [paginaAtual, setPaginaAtual] = useState(1);

  const itensPorPagina = 8;

  const filtrados = useMemo(() => {
    return produtos.filter((p) => {
      const nomeMatch = (p.nome ?? "").toLowerCase().includes(busca.toLowerCase());
      const categoriaMatch = categoriaSelecionada
        ? p.categorias.includes(parseInt(categoriaSelecionada))
        : true;
      const preco = Number(p.preco);
      const precoMatch = preco >= valorMin && preco <= valorMax;

      return nomeMatch && categoriaMatch && precoMatch;
    });
  }, [produtos, busca, categoriaSelecionada, valorMin, valorMax]);

  const totalPaginas = Math.ceil(filtrados.length / itensPorPagina);
  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const produtosPagina = filtrados.slice(inicio, fim);

  const handleRangeChange = (_: any, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValorMin(newValue[0]);
      setValorMax(newValue[1]);
    }
  };

  return {
    busca,
    setBusca,
    categoriaSelecionada,
    setCategoriaSelecionada,
    valorMin,
    valorMax,
    handleRangeChange,
    paginaAtual,
    setPaginaAtual,
    totalPaginas,
    produtosPagina,
  };
};
