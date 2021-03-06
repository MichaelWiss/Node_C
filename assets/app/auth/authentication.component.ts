import { Component } from "@angular/core";

@Component({
	  selector: 'app-authentication',
	  template: `
       <header class="row">
        <nav class="col-md-8 col-md-offset-2">
           <ul class="nav nav-tabs">
	          <li><a [routerLink]="['signup']">Signup</a></li>
	          <li><a [routerLink]="['signin']">Signin</a></li>
	          <li><a [routerLink]="['logout']">Logout</a></li>
		   </ul>
		 </nav>
	   </header>
	   <div class="row spacing">
	   		<router-outlet></router-outlet>
	   </div>
	  `
})
export class AuthenticationComponent {

}