import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  displayValue: string = '';
  operator: string | null = null;
  firstOperand: number | null = null;

  onDigitClick(digit: string): void {
    this.displayValue += digit;
  }

  onOperatorClick(operator: string): void {
    this.operator = operator;
    this.firstOperand = +this.displayValue;
    this.displayValue = '';
  }

  onEqualsClick(): void {
    if (this.operator && this.firstOperand !== null) {
      const secondOperand = +this.displayValue;
      switch (this.operator) {
        case '+':
          this.displayValue = (this.firstOperand + secondOperand).toString();
          break;
        case '-':
          this.displayValue = (this.firstOperand - secondOperand).toString();
          break;
        case '*':
          this.displayValue = (this.firstOperand * secondOperand).toString();
          break;
        case '/':
          this.displayValue = (this.firstOperand / secondOperand).toString();
          break;
      }
      this.operator = null;
      this.firstOperand = null;
    }
  }

  onClearClick(): void {
    this.displayValue = '';
    this.operator = null;
    this.firstOperand = null;
  }
}