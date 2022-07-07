import { Colecao } from "../models/Colecao";
import { Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ColecaoService {

    private colecaoFake: Colecao[] = [
        new Colecao(1, "Coleção 1", "Inverno 2023", "Yan"),
        new Colecao(2, "Coleção 2", "Verão 2023", "Fernando"),
        new Colecao(3, "Coleção 3", "Outono 2022", "Pamylla"),
        new Colecao(4, "Coleção 4", "Inverno 2022", "Michel"),
        new Colecao(5, "Coleção 5", "Primavera 2022", "Maria"),
        new Colecao(6, "Coleção 6", "Outono 2021", "José"),
        new Colecao(7, "Coleção 7", "Inverno 2021", "João"),
        new Colecao(8, "Coleção 8", "Verão 2021", "Ana"),
        new Colecao(9, "Coleção 9", "Inverno 2020", "Eliane"),
        new Colecao(10, "Coleção 10", "Outono 2020", "Antonio"),
        new Colecao(11, "Coleção 11", "Verão 2020", "Adriana"),
        new Colecao(12, "Coleção 12", "Inverno 2019", "Hélio")
    ];

    constructor(private http: HttpClient) { }

    public obterOrcamentos(): Observable<Colecao[]> {
        return of(this.colecaoFake);
    }
}