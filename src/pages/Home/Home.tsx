import { useState } from "react";

export function Home() {
  const [list, setList] = useState<string[]>([]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 space-y-4">
        <h1 className="text-4xl font-bold text-center text-blue-600">Livraria Aki</h1>
        <h1 className="text-center text-[19px] text-gray-700">Cadastre livros e leia online de graça</h1>
        <h2 className="text-lg text-gray-700 font-medium text-center">Seus livros cadastrados:</h2>

        {list.length === 0 ? (
          <p className="text-center text-gray-500 italic">Sua lista está vazia</p>
        ) : (   
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {list.map((livro, index) => (
              <li key={index} className="ml-2">
                <span className="font-semibold">{index + 1} -</span> {livro}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
