import { Component } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-acercade',
  standalone: true,
  imports: [],
  templateUrl: './acercade.component.html',
  styleUrl: './acercade.component.scss'
})
export class AcercadeComponent {

  messages: string[] = ['Hola','Buenos dias']

  constructor(private contactosService: ContactosService){


  }
  ngOnInit(){
    this.messages = this.contactosService.get();
  }


}
