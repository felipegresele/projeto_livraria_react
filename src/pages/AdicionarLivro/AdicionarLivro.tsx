import { useForm } from "react-hook-form";
import { InputController } from "../../components/Input/InputController";
import { SelectProps } from "../../components/Select/SelectController";
import { Link } from "react-router-dom";

export function AdicionarLivro() {
  const { control, reset, handleSubmit, watch } = useForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        className="bg-white max-w-md w-full p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit(data => console.log(data))}
      >
        <h1 className="text-2xl font-semibold text-center mb-6">Adicionar Livro:</h1>

        <InputController
          name="nome"
          control={control}
          label="Nome:"
          placeholder="Digite..."
          rules={{ required: "Nome do livro é obrigatório" }}
        />

        <InputController
          name="autor"
          control={control}
          label="Autor:"
          placeholder="Digite..."
          rules={{ required: "Nome do autor é obrigatório" }}
        />

        <InputController
          name="qntpaginas"
          control={control}
          label="Quantidade de páginas:"
          placeholder="Digite..."
          rules={{ required: "Quantidade de páginas é obrigatório" }}
        />

        <SelectProps
          name="categoria"
          control={control}
          label="Categoria"
          rules={{ required: "Categoria é obrigatória" }}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-2 rounded-full w-full mt-4"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
