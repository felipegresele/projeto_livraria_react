import { useState } from "react";
import type { Livro } from "../../service/type/Livro";
import { livrosIniciais } from "../../service/api/livros";
import { IoIosStarOutline } from "react-icons/io";
import { Status } from "../../service/type/StatusLivro";
import { Link } from "react-router-dom";
import { LivroCard } from "../../components/Livro/LivroCard";

export function CadastrarLivro() {
  const [livroCadastrado, setLivroCadastrado] =
    useState<Livro[]>(livrosIniciais);

  const [favoritar, setFavoritar] = useState(false);

  const favoritarLivro = () => {
    //vai pegar o valor atual e modificar, se for false vai virar true e ao contrario tambem
    setFavoritar((valorAtual) => !valorAtual);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="justify-between items-center flex mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Livros Cadastrados</h1>
      </div>
      
      <div className="mt-5 mb-5 p-1">
          <label className="font-bold text-2xl mr-3">Pesquisar:</label>
        <input 
          className="p-3 rounded-2xl bg-gray-100 font-bold w-[450px] h-[40px] border-0"
          placeholder="Pesquise o livro que deseja..."
        />
        
        <Link
          to="/add_livro"
          className="text-white bg-blue-500 p-2 w-40 h-10 rounded-3xl text-center ml-5 font-bold"
        >
          Adicionar Livro
        </Link>
      </div>

      <LivroCard />

      {livroCadastrado.length === 0 ? (
        <p className="text-gray-600 text-lg italic">Nenhum livro cadastrado</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {livroCadastrado.map((livro, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
            >
              <div onClick={favoritarLivro}>
                {favoritar === true ? (
                  <IoIosStarOutline
                    className="m-2 mr-60 mb-5 cursor-pointer"
                    size={20}
                    color="orange"
                  />
                ) : (
                  <IoIosStarOutline
                    className="m-2 mr-60 mb-5 cursor-pointer"
                    size={20}
                    color="gray"
                  />
                )}
              </div>

              <img
                src={livro.imagem}
                alt={livro.nome}
                className="w-40 h-60 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold text-center text-gray-800">
                {index + 1}. {livro.nome}
              </h2>
              <p className="text-sm text-gray-600 text-center">
                por {livro.autor}
              </p>
              <p className="text-sm text-gray-500">Páginas: {livro.paginas}</p>
              <button className="font-20 bg-blue-400 text-white font-bold w-40 h-10 p-2 mt-5 rounded-xl cursor-pointer">
                Cadastrar
              </button>
              <select className="border-0 p-2 mt-5 rounded-xl cursor-pointer border-gray-500">
                <option value="">Selecione uma opcao</option>
                {/*entries transporma em um array de pares[chave,valor] e o map percorre cada um desses itens e cria um option para cada um deles */}
                {/*key é qual objeto de Status ele ta pegando e value é o valor que esse indice mostra exemplo 
                key Lido = value "Lido" */}
                {Object.entries(Status).map(([key, value]) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
