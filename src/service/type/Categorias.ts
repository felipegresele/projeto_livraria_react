
export const Categorias = {
  FICCAO: "Ficção",
  NAO_FICCAO: "Não Ficção",
  ROMANCE: "Romance",
  TERROR: "Terror",
  SUSPENSE: "Suspense",
  AVENTURA: "Aventura",
  BIOGRAFIA: "Biografia",
  INFANTIL: "Infantil",
  EDUCACAO: "Educação",
  RELIGIAO: "Religião",
  AUTOAJUDA: "Autoajuda",
  TECNOLOGIA: "Tecnologia"
} as const

export type Categoria = typeof Categorias[keyof typeof Categorias];

// o as cost deixa os valores imutaveis ou seja eles nao podem ser mudados
//sem o as cost os valores ficam como string e podem ser mudados
//quando os valores devem ser tratados como imutaveis e exatos se usa as const pois nao pode mudar o valor

{/* Passo 1:
    typeof Categories = qual o tipo dessa caixa?
    Aqui, é uma caixa que tem etiquetas chamadas FICCAO, ROMANCE, TERROR, com valores "Ficção", "Romance" e "Terror".
    
    Passo 2:
    Passo 2: keyof typeof Categorias
    Pensa nisso como:
    “Quais são os nomes das etiquetas nessa caixa?”
    Aqui, os nomes são: "FICCAO", "ROMANCE", "TERROR"
    
    Passo 3: typeof Categorias[keyof typeof Categorias]
    Agora você fala:
    “Me dá os valores que estão nessas etiquetas”

    Ou seja, pega os valores:

    valor de "FICCAO" → "Ficção"

    valor de "ROMANCE" → "Romance"

    valor de "TERROR" → "Terror"*/}
