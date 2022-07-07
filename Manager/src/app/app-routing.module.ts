import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColecaoListPageComponent } from './pages/colecao-list-page/colecao-list-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RedefinirSenhaPageComponent } from './pages/redefinir-senha-page/redefinir-senha-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:  LoginPageComponent },
  { path: 'redefinir-senha', component:  RedefinirSenhaPageComponent },
  { path: 'colecao-list', component:  ColecaoListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
