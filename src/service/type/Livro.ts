import type { Status } from "./StatusLivro"
import { type Categoria } from './Categorias';

export type Livro = {
    nome: string,
    autor: string,
    status: Status,
    descricao: string,
    imagemUrl: string,
    ano: number,
    categorias: Categoria, // isso restringe a usar somente os valores definidos
    paginas: number,
    favorito: boolean,
    observacoes: string,
}