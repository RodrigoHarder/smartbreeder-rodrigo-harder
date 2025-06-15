import { useEffect, useState } from "react";
import produtosRaw from "../data/produtos_com_variacoes.json";
import categoriasRaw from "../data/categorias.json";
import type { Categoria, Produto } from "../types";

export function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setProdutos(produtosRaw as Produto[]);
      setCategorias(categoriasRaw as Categoria[]);
      setLoading(false);
    }

    carregarDados();
  }, []);

  return { produtos, categorias, loading };
}
