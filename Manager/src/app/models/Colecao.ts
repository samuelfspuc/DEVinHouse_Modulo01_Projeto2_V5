export class Colecao {
    constructor(id: number, nome: string, orcamento: number, responsavel: string) {
        this.id = id;
        this.nome = nome;
        this.orcamento = orcamento;
        this.responsavel = responsavel;
      }

    id: number;
    nome: string;
    orcamento: number;
    responsavel: string;
  }
