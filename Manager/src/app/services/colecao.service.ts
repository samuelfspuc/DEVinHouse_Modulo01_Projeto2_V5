import { Colecao } from "../models/Colecao";
import { Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ColecaoService {
    /*
    responsavel: string,
              estacao: string,
              marca: string,
              orcamento: number,
              ano: number
    */

    private colecaoFake: Colecao[] = [
        new Colecao(1, "Coleção 1", "Yan", "Inverno", "Marca 1", 100, 2020),
        new Colecao(2, "Coleção 2", "Fernando", "Inverno", "Marca 2", 150, 2020),
        new Colecao(3, "Coleção 3", "Pamylla", "Inverno", "Marca 3", 180, 2022),
        new Colecao(4, "Coleção 4", "Michael", "Inverno", "Marca 4", 250, 2022),
        new Colecao(5, "Coleção 5", "Maria", "Inverno", "Marca 5", 550, 2023)
    ];

    constructor(private http: HttpClient) { }

    public obterOrcamentos(): Observable<Colecao[]> {
        return of(this.colecaoFake);
    }

    public criarOrcamento(colecao: Colecao) {
        this.colecaoFake.push(colecao);
    }
}