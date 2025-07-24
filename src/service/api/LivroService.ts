import axios from "axios";

const API_URL = "http://localhost:8080/livros";

export const listarLivros = () => axios.get(API_URL);
export const buscarLivro = (id) => axios.get(`${API_URL}/${id}`)
export const cadastrarLivro = (livro) => axios.post(API_URL, livro)
export const atualizarLivro = (id) => axios.put(`${API_URL}/${id}`)
export const deletarLivro = (id) => axios.delete(`${API_URL}/${id}`)