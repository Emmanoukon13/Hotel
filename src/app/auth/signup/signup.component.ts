import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  registerForm=this.fb.group({
    username:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password1:['',Validators.required],
    password2:['',Validators.required],
  });


  IsSubmitted=false;

  constructor(private fb:FormBuilder){}

  

  onSubmit():void{

    console.log('submitted from',
     this.registerForm.value,
     this.registerForm.valid,
     this.registerForm.get('password1')?.value ==this.registerForm.get('password2')?.value,
     );
     this.IsSubmitted=true;
  }

}
