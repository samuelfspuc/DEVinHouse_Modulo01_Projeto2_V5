import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formLogin: FormGroup = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  });

  get f(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit() {
    if (this.formLogin.valid) {
      //this.submitEM.emit(this.form.value);
    }
  }


}
