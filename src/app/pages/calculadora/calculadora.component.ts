import { Component, ViewChild, Input } from '@angular/core';
import { CalculadoraService } from '../../services/calculadora.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  msg: string = 'Resultado'
  messages: string[] = []

v_1: string = '1'
v_2: string = '2'
v_3: string = '3'
v_4: string = '4'
v_5: string = '5'
v_6: string = '6'
v_7: string = '7'
v_8: string = '8'
v_9: string = '9'
v_0: string = '0'
v_plus: string = '+'
v_minus: string = '-'
v_multiply: string = '*'
v_divide: string = '/'
v_clear: string = 'C'
v_dot: string = '.'
v_result: string = '='

displayCal: string = ' '
operation: string = ' '
var: number =0

//Constructor para agregar historial
constructor(private calculadoraService: CalculadoraService ){}

ngOnInit(){
  this.messages = this.calculadoraService.get();
}

limpiar(){
  this.calculadoraService.clear()
  this.ngOnInit()
}
add(value: string ){
  
  if(value=="="){
    try {
      this.operation= this.displayCal;  
      this.displayCal= eval(this.displayCal);
      this.calculadoraService.add(this.operation + '=' + this.displayCal);
    } catch (error) {
        this.displayCal = 'Error';
    }
    this.var=1;
  }else if(value=="C") {
    this.displayCal= '';
  }else if(this.var==1) {
    this.var=0;
    this.displayCal= '';
    this.displayCal += value;
  }else {
    this.displayCal += value;
  }
}

reorder() {
  let valuesCal= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', 'C', '.', '='];

  valuesCal= shuffleArray(valuesCal);

  function shuffleArray(array: string[]): string[] {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }



  this.v_1= valuesCal[1];
  this.v_2= valuesCal[2];
  this.v_3= valuesCal[3];
  this.v_4= valuesCal[4];
  this.v_5= valuesCal[5];
  this.v_6= valuesCal[6];
  this.v_7= valuesCal[7];
  this.v_8= valuesCal[8];
  this.v_9= valuesCal[9];
  this.v_0= valuesCal[0];
  this.v_plus= valuesCal[10];
  this.v_minus= valuesCal[11];
  this.v_multiply= valuesCal[12];
  this.v_divide= valuesCal[13];
  this.v_clear= valuesCal[14];
  this.v_dot= valuesCal[15];
  this.v_result= valuesCal[16];

  }

}
