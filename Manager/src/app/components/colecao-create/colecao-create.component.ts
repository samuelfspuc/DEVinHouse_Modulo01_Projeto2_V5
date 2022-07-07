
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Colecao } from 'src/app/models/Colecao';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-colecao-create',
  templateUrl: './colecao-create.component.html',
  styleUrls: ['./colecao-create.component.css']
})
export class ColecaoCreateComponent implements OnInit {


  form: FormGroup = new FormGroup({
    nome: new FormControl(''),
    responsavel: new FormControl(''),
    estacao: new FormControl(''),
    marca: new FormControl(''),
    orcamento: new FormControl(''),
    ano: new FormControl('')
  });

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private colecaoService: ColecaoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: new FormControl('', [Validators.required, Validators.minLength(10)]),
      responsavel: new FormControl('', [Validators.required, Validators.minLength(10)]),
      estacao: new FormControl('', [Validators.required, Validators.minLength(5)]),
      marca: new FormControl('', [Validators.required, Validators.minLength(5)]),
      orcamento: new FormControl('', [Validators.required, Validators.minLength(3)]),
      ano: new FormControl('', [Validators.required, Validators.minLength(4)])
    })
  }

  submit() {
    debugger;

    if (this.form.valid) {
      var nome = this.form.get('nome')?.value;
      let responsavel = this.form.get('responsavel')?.value;
      let estacao = this.form.get('estacao')?.value;
      let marca = this.form.get('marca')?.value;
      let orcamento = Number(this.form.get('orcamento'));
      let ano = Number(this.form.get('ano'));

      let colecao = new Colecao(6, nome, responsavel, estacao, marca, orcamento, ano);

      this.colecaoService.criarOrcamento(colecao);

      this.toastr.success('Mensagem', 'Coleção criada com sucesso!');

      this.router.navigate(['/colecao-list'])
    }
  }


}
