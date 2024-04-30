import { Injectable } from '@angular/core';
import { RestaComponent } from '../pages/resta/resta.component';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  results: string[] = []

  constructor() { }

  add(result: string){
    this.results.push(result)
  }

  clear(){
    this.results = []
  }
  
  get() {
    return this.results
  }
}
