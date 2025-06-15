import { Routes, Route} from "react-router-dom";
import { FavoritesProvider } from "./context/favoriteContext";
import { ListaDeProdutos } from "./pages/ListaDeProdutos";
import { Favoritados } from "./pages/Favoritados";
import { Cabecalho } from "./components/Cabecalho";

function App() {
  return (
    <FavoritesProvider>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<ListaDeProdutos />} />
        <Route path="/favoritos" element={<Favoritados />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
