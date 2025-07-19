import { Home } from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastrarLivro } from "./pages/Cadastrar/CadastrarLivro";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disponiveis" element={<CadastrarLivro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
