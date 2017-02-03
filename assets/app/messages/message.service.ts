import { Message } from "./message.medal";


export class MessageService{
   private message: Message[]=[];

  addMessage(message: Message){
     this.messages.push(message);
  }
}