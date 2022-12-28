import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  resultado: string = '';
  classResult: string = '';

  calculate(a: number, b: number, operation: string): void {
    if (isNaN(a) || isNaN(b)) {
      this.resultado = 'Favor de colocar números';
      this.classResult = 'text-danger';
      return;
    }

    this.classResult = 'text-success';

    switch(operation) {
      case '+':
        this.resultado = (a + b).toString();
        break;

      case '-':
        this.resultado = (a - b).toString();
        break;

      case '*':
        this.resultado = (a * b).toString();
        break;

      default:
        this.resultado = (a / b).toString();
    }
  }
}
