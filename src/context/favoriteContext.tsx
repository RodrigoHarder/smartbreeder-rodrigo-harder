import { createContext, useContext, useState, type ReactNode } from "react";
import type { Produto } from "../types";

interface FavoritesContextType {
  favoritos: Produto[];
  toggleFavorito: (produto: Produto) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  const toggleFavorito = (produto: Produto) => {
    const isFavorito = favoritos.find(p => p.id === produto.id);
    if (isFavorito) {
      setFavoritos(prev => prev.filter(p => p.id !== produto.id));
    } else {
      const novaLista = [...favoritos];
      const categoriasProduto = produto.categorias;

      categoriasProduto.forEach(catId => {
        const daCategoria = novaLista.filter(p => p.categorias.includes(catId));
        if (daCategoria.length >= 2) {
          const maisAntigo = daCategoria[0];
          novaLista.splice(novaLista.findIndex(p => p.id === maisAntigo.id), 1);
        }
      });

      novaLista.push(produto);
      setFavoritos(novaLista);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites deve ser usado dentro de FavoritesProvider");
  return context;
};
