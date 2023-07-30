import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  contactForm = new FormGroup(
    {
      nom: new FormControl('',  [ Validators.required, Validators.minLength(5) ]  ),

      prenom: new FormControl('',[ Validators.required, Validators.maxLength(10) ]),
      email: new FormControl('',   [ Validators.required, Validators.email ]   ),
      message: new FormControl('',Validators.required)
    }
  );




  sendMessage(){
    // GET THE VALUES FROM THE FORM !!!

    const body  = this.contactForm.value;


    console.log(body);
    
    
    
  }


}
