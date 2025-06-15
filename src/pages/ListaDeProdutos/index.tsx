import { Box } from "@mui/material";
import { useProdutos } from "../../hooks/useProdutos";
import { useFiltros } from "../../hooks/useFiltros";
import { Filtros } from "../../components/Filtros";
import { Cartao } from "../../components/Cartao";
import { Paginacao } from "../../components/Paginacao";

export const ListaDeProdutos = () => {
  const { produtos, categorias, loading } = useProdutos();
  const {
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
  } = useFiltros(produtos);

  if (loading) return <div>Carregando produtos...</div>;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 12 }}>
      <Filtros
        busca={busca}
        setBusca={setBusca}
        categoriaSelecionada={categoriaSelecionada}
        setCategoriaSelecionada={setCategoriaSelecionada}
        valorMin={valorMin}
        valorMax={valorMax}
        handleRangeChange={handleRangeChange}
        categorias={categorias}
        resetarPagina={() => setPaginaAtual(1)}
      />
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
        {produtosPagina.map((produto) => (
          <Cartao
            key={produto.id}
            produto={produto}
            categorias={categorias}
          />
        ))}
      </Box>
      <Paginacao
        paginaAtual={paginaAtual}
        totalPaginas={totalPaginas}
        onPaginaChange={setPaginaAtual}
      />
    </Box>
  );
};
