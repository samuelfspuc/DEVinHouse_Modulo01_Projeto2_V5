export class Colecao {
    constructor(id: number, nome: string, estacaoLancamento: string, responsavel: string) {
        this.id = id;
        this.nome = nome;
        this.estacaoLancamento = estacaoLancamento;
        this.responsavel = responsavel;
      }

    id: number;
    nome: string;
    estacaoLancamento: string;
    responsavel: string;
  }
