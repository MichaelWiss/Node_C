import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Message } from "./message.model";
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';





@Injectable()
export class MessageService {
   private messages: Message[]=[];

   constructor(private http: Http) {}

  addMessage(message: Message) {
     this.messages.push(message);
     const body = JSON.stringify(message);
     return this.http.post('http://locahost:3000/message', body)
         .map((response: Response) => response.json())
         .catch((error: Response) => Observable.throw(error.json()));
  }

  getMessages(){
  	  return this.messages;
  }

  deleteMessage(message: Message) {
  	this.messages.splice(this.messages.indexOf(message), 1);
  }
}