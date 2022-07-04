import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { MatCardModule } from '@angular/material/card';
import { RedefinirSenhaPageComponent } from './pages/redefinir-senha-page/redefinir-senha-page.component';
import { RedefinirSenhaComponent } from './components/redefinir-senha/redefinir-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    RedefinirSenhaPageComponent,
    RedefinirSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatInputModule, 
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
