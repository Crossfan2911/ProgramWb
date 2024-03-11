import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { CalculadoraComponent } from './calculadora_cientifica/calculadora.component';
const routes: Routes = [

  {
    path:'',
  redirectTo: '/calculadora',
  pathMatch:'full'
 
  },
 
  {
  path:'inicio',
  component: InicioComponent,
  },
  {
    path:'calculadora',
    component: CalculadoraComponent,
    },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }