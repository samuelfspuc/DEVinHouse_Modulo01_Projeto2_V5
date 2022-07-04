import { Component, OnInit } from '@angular/core';
import { Colecao } from 'src/app/models/Colecao';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'orcamento', 'responsavel'];
  colecoes: Colecao[] = [];
  public dataSource: Colecao[] = [];

  constructor(
    private colecaoService: ColecaoService,
  ) { }

  ngOnInit(): void {

    this.colecaoService.obterOrcamentos().subscribe(res => {
      this.dataSource = res;
      console.log(res);
    });
  }

}
