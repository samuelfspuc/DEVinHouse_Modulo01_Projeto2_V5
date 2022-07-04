
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
   selector: 'app-redefinir-senha',
   templateUrl: './redefinir-senha.component.html',
   styleUrls: ['./redefinir-senha.component.css']
})
export class RedefinirSenhaComponent implements OnInit {


  formRedefinirSenha: FormGroup = new FormGroup({
    email: new FormControl('')
  });

  get f(): { [key: string]: AbstractControl } {
    return this.formRedefinirSenha.controls;
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formRedefinirSenha = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.email])
    })
  }

  submit() {
    if (this.formRedefinirSenha.valid) {
      //this.submitEM.emit(this.form.value);
    }
  }


}
