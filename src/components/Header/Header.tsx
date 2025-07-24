import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";

export function Header() {
  return (
    <div className="justify-between h-20 flex items-center bg-blue-500 text-white">
      <div className="flex gap-5 justify-center items-center">
        <Link to="home">
          <img src={icon} className="w-10 ml-2" />
        </Link>
        <h1 className="font-bold">Livraria Aki</h1>
      </div>
      <div>
        <Link to="disponiveis" className="p-2 font-bold text-[14px]">Livros Disponíveis</Link>
        <Link to="add_livro" className="p-2 font-bold text-[14px]">Adicionar Livro</Link>
        <Link to="biblioteca" className="p-2 font-bold text-[14px]">Minha Biblioteca</Link>
      </div>
    </div>
  );
}
