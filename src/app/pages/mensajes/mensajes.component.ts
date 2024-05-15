import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../domain/message'
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.scss'
})
export class MensajesComponent {

  message: Message = new Message()

  messages: any

  constructor(private messagesService: MensajesService){

  }

  ngOnInit(){
    this.messagesService.getMessages().then(data => {

      this.messages = data.docs.map((doc:any) => {
        console.log(doc.id)
        console.log(doc.data())
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      
      console.log('msgs', this.messages)
    })
  }

  guardar(){
    this.messagesService.addMessage(this.message)
    this.ngOnInit()
  }

}
