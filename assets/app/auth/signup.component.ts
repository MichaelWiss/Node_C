import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html'
})


export class SignUpComponent implements OnInit {
	myForm: FormGroup;

	ngOnInit() {
		this.myForm = new FormGroup({
             firstName: new FormControl('null, Validators.required'),
             lastName: new FormControl('null, Validators.required'),
             email: new FormControl(null, [
             	    Validators.required,
             	    Validators.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$;")
             	]),
             password: new FormControl('null, Validators.required'),
		});
	}
}