import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarAtualizarClienteComponent } from './pages/cadastrar-atualizar-cliente/cadastrar-atualizar-cliente.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cliente', component: ClienteComponent
  },
  {
    path: 'cliente/cadastrar', component: CadastrarAtualizarClienteComponent
  },
  {
    path: 'cliente/editar/:cpf', component: CadastrarAtualizarClienteComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
