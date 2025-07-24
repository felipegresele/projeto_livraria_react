import { Home } from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastrarLivro } from "./pages/Cadastrar/CadastrarLivro";
import { Header } from "./components/Header/Header";
import { AdicionarLivro } from "./pages/AdicionarLivro/AdicionarLivro";
import { PageNotFound } from "./routes/PageNoutFound";
import { LivroCard } from "./components/Livro/LivroCard";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/disponiveis" element={<LivroCard />} />
        <Route path="/add_livro" element={<AdicionarLivro />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
