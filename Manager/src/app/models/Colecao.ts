export class Colecao {

  constructor(id: number,
              nome: string,
              responsavel: string,
              estacao: string,
              marca: string,
              orcamento: number,
              ano: number) {
    this.id = id;
    this.nome = nome;
    this.responsavel = responsavel;
    this.estacao = estacao;
    this.marca = marca;
    this.orcamento = orcamento;
    this.ano = ano;
  }

  id: number;
  nome: string;
  responsavel: string;
  estacao: string;
  marca: string;
  orcamento: number;
  ano: number;
}
