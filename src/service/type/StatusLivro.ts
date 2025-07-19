export const Status = {
   Lido: "Lido",
  Lendo: "Lendo",
  NaoLido: "Não Lido",
  Desejo: "Desejado",
} as const

export type Status = typeof Status[keyof typeof Status] 