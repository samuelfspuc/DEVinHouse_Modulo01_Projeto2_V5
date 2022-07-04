import { Colecao } from "../models/Colecao";
import { Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ColecaoService {

    private colecaoFake: Colecao[] = [
        new Colecao(1, "Lorem Ipsum", 4500, "Yan"),
        new Colecao(2, "Lorem Ipsum 2", 4600, "Fernando"),
        new Colecao(3, "Lorem Ipsum 3", 4700, "Pamylla"),
        new Colecao(4, "Lorem Ipsum 4", 4800, "Michel"),
        new Colecao(5, "Lorem Ipsum 5", 4900, "Maria"),
        new Colecao(6, "Lorem Ipsum 6", 4910, "José"),
        new Colecao(7, "Lorem Ipsum 7", 4915, "João"),
        new Colecao(8, "Lorem Ipsum 8", 4920, "Ana"),
        new Colecao(9, "Lorem Ipsum 9", 4925, "Eliane"),
        new Colecao(10, "Lorem Ipsum 10", 4930, "Antonio"),
        new Colecao(11, "Lorem Ipsum 11", 4935, "Adriana"),
        new Colecao(12, "Lorem Ipsum 12", 4940, "Hélio")
    ];

    constructor(private http: HttpClient) { }

    public obterOrcamentos(): Observable<Colecao[]> {
        return of(this.colecaoFake);
    }
}