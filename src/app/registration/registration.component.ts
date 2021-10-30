import { Component } from '@angular/core';

@Component({
selector: 'app-registration',
templateUrl: './registration.component.html',
styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
username : string = "";

course : string="";


log(form:any){
this.username = form.controls.user.value;
this.course=form.controls.course.value;
alert("you are successfully registered for "+ this.course+ "dear "+this.username + "!");
}

}
