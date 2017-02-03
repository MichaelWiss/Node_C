import { Message } from "./message.medal";


export class MessageService{
   private message: Message[]=[];

  addMessage(message: Message){
     this.messages.push(message);
  }

  getMessage(){
  	  return this.messages;
  }

  deleteMessage(message: Message) {
  	this.message.splice(this.messages.indexOf(message), 1);
  }
}