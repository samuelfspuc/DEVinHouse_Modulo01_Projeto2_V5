import { Component, OnInit } from '@angular/core';
import { Colecao } from 'src/app/models/Colecao';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-colecao-list',
  templateUrl: './colecao-list.component.html',
  styleUrls: ['./colecao-list.component.css']
})
export class ColecaoListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'estacaoLancamento', 'responsavel'];
  colecoes: Colecao[] = [];
  public dataSource: Colecao[] = [];

  constructor(
    private colecaoService: ColecaoService
  ) { }

  ngOnInit(): void {

    this.colecaoService.obterOrcamentos().subscribe(res => {
      this.dataSource = res;
      console.log(res);
    });
  }

}
