// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-redefinir-senha',
//   templateUrl: './redefinir-senha.component.html',
//   styleUrls: ['./redefinir-senha.component.css']
// })
// export class RedefinirSenhaComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }





import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
   selector: 'app-redefinir-senha',
   templateUrl: './redefinir-senha.component.html',
   styleUrls: ['./redefinir-senha.component.css']
})
export class RedefinirSenhaComponent implements OnInit {


  formLogin: FormGroup = new FormGroup({
    email: new FormControl('')
  });

  get f(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.email])
    })
  }

  submit() {
    if (this.formLogin.valid) {
      //this.submitEM.emit(this.form.value);
    }
  }


}
