
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  operandoA!: number;
  operandoB!: number;

  //ALMACENAR RESULTADOS
  result_suma!: number;
  result_resta!: number;
  result_multiplicacion!: number;
  result_division1!: number;
  result_division2!: number;
  result_porcentaje1!: number;
  result_porcentaje2!: number;
  result_PI1!: number;
  result_PI2!: number;
  result_sen1!: number;
  result_sen2!: number;
  result_cos1!: number;
  result_cos2!: number;
  result_tan1!: number;
  result_tan2!: number;


  constructor() { }
  
  //OPERACIONES BASICAS
  ngResult(): void {
    this.result_suma  = (this.operandoA+this.operandoB);
    this.result_resta = (this.operandoA-this.operandoB);
    this.result_multiplicacion = (this.operandoA*this.operandoB);
    this.result_division1 = (this.operandoA/this.operandoB);
    this.result_division2 = (this.operandoB/this.operandoA);
    this.result_porcentaje1 = (this.operandoA*this.operandoB)/100;
    this.result_porcentaje2 = (this.operandoB*this.operandoA)/100;
    this.result_PI1 = this.operandoA*3.141516;
    this.result_PI2 = this.operandoB*3.141516;
    this.result_sen1 = Math.sin(this.operandoA);
    this.result_sen2 = Math.sin(this.operandoB);
    this.result_cos1 = Math.cos(this.operandoA);
    this.result_cos2 = Math.cos(this.operandoB);
    this.result_tan1= Math.tan(this.operandoA);
    this.result_tan2 = Math.tan(this.operandoB);

  }




  

  

  

  
  
 
}



