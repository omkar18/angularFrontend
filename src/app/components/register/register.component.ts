import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
//import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  username:String;
  email:String;
  password:String;

  constructor(private validateService:ValidateService,
    private authService:AuthService,
    private router:Router
  //private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user={
      name:this.name,
      username:this.username,
      email:this.email,
      password:this.password
    }

    //require Fields
    if(!this.validateService.validateRegister(user)){
      //this.flashMessage.show('please fill all fields',{cssClass:'alert-danger',timeout:3000});
     // return false;
     alert('please fill all fields');
    }

    if(!this.validateService.validateEmail(user.email)){
      
      //this.flashMessage.show('please enter valid email',{cssClass:'alert-danger',timeout:3000});
      //return false;
      alert('please enter valid email');
    }
    
    //register user
    this.authService.registerUser(user).subscribe(data=>{
      if(data.success){
        alert('register successfully');
        this.router.navigate(['/login']);

      }else{
        alert('something went wrong');
        this.router.navigate(['/register']);
      }
    });

}

 

   


}
