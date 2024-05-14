import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from '../../services/websocket.service';
import { text } from 'express';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  
  userChat ={
    user: '',
    text: ''
  }

  mensajes: any;
  eventName = "send-message"

  constructor(private activated :ActivatedRoute, private webSocket: WebsocketService){


  }

  ngOnInit(): void {
    //Para saber que usuario esta conectandose
    const id = this.activated.snapshot.params['id'];
    this.userChat.user = id;
    // Escuchar eventos del servidor
    this.webSocket.listen('mensaje-texto').subscribe((data) => {
      console.log('Mensaje recibido:', data);
      this.mensajes = data;
    });

    // Enviar un mensaje al servidor
    //this.webSocket.emit('mensaje', 'Mensaje desde angular');
  }

  sendMessage(){
    this.webSocket.emit('mensaje-enviado',this.userChat);
    this.userChat.text="";
  }


}
