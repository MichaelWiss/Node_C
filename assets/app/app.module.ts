import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component.ts";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";

import { SignUpComponent } from "./auth/signup.component";
import { SignInComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";



@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignUpComponent,
        SignInComponent
    ],
    providers: [AuthService],
    imports: [
              BrowserModule,
              FormsModule,
              routing, 
              ReactiveFormsModule,
              HttpModule
              ],
    bootstrap: [AppComponent]
})
export class AppModule {

}