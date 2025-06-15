import { useEffect, useState } from "react";
import produtosRaw from "../data/produtos_com_variacoes.json";
import categoriasRaw from "../data/categorias.json";
import type { Categoria, Produto } from "../types";

export function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProdutos(produtosRaw as Produto[]);
      setCategorias(categoriasRaw as Categoria[]);
      setLoading(false);
    }, 1000);
  }, []);

  return { produtos, categorias, loading };
}
