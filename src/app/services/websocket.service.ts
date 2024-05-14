import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket : any;
  server = 'http://localhost:3000';

  constructor() { 
    this.socket = io(this.server),{ transports: ['websocket', 'polling', 'flashsocket'] };
  }


  listen(event: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(event, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  emit(event: string, data: any): void {
    this.socket.emit(event, data);
  }
}
