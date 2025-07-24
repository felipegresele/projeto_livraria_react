import { useEffect, useState } from "react"
import { listarLivros } from "../../service/api/LivroService"

type LivroData = {
    nome: string,
    imagemUrl: string,
    autor: string,
    paginas: number,
}

export function LivroCard() {
  const [livros, setLivros] = useState<LivroData[]>([])

  useEffect(() => {
    listarLivros()
      .then(response => setLivros(response.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {livros.map((livro, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
        >
          <img
            src={livro.imagemUrl}
            alt={livro.nome}
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
          <h1 className="text-xl font-bold text-gray-800 text-center">{livro.nome}</h1>
          <h3 className="text-md text-gray-600">{livro.autor}</h3>
          <p className="text-sm text-gray-500 mb-4">{livro.paginas} páginas</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-400 transition cursor-pointer">
            Adicionar na biblioteca
          </button>
        </div>
      ))}
    </div>
  )
}
