import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
	selector: 'app-message-input',
	templateUrl: './message-input.component.html',
})
export class MessageInputComponent implements OnInit {
    message: Message;
    
	constructor(private messageService: MessageService) {}

     onSubmit(form: NgForm) {
         if (this.message) {
           this.message.content = form.value.content;
           
         } else{
        const message = new Message(form.value.content, 'Michael');
     	this.messageService.addMessage(message)
     	    .subscribe(
                data => console.log(data),
                error => console.log(error)
     	    	);
          }
     	form.resetForm() 
     }

     onClear(form: NgForm){
         form.resetForm();
     }

     ngOnInit() {
         this.messageService.messageIsEdit.subscribe(
             (message: Message) => this.message = message
             );
     }
}