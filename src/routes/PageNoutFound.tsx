import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-5xl font-bold text-black mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Página não encontrada
      </h2>
      <p className="text-gray-600 mb-6">
        A página que você está procurando não existe.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
