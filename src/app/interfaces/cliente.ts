export interface ICliente {
  cpf: number;
  nome: string;
  telefone: string;
  rendimentoMensal: number;
  endereco:{
    rua: string;
    numero: string;
    cep: string;
  }
 /* emprestimos:{
    id: number;
    valorInicial: number;
    valorFinal: number;
    dataInicial: string;
    dataFinal: string;
    relacionamento: string;
  }*/
}
