import { Http, Response, Headers } from "@angular/http";
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
     const headers = new Headers({'Content-Type': 'application/json'});
     return this.http.post('http://locahost:3000/message', body, {headers: headers})
         .map((response: Response) => response.json())
         .catch((error: Response) => Observable.throw(error.json()));
  }

  getMessages(){
  	  return this.http.get('http://localhost:3000/message')
           .map((response: Response => {
             const messages = response.json().obj;


           }))

  }

  deleteMessage(message: Message) {
  	this.messages.splice(this.messages.indexOf(message), 1);
  }
}