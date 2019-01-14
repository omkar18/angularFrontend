import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String

  constructor(private authservice:AuthService,
  private router:Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){

    const user={
      username:this.username,
      password:this.password
    }

    this.authservice.authenticateUser(user).subscribe(data=>{
        if(data.success){
          this.authservice.storeUserData(data.token,data.user);
          alert('you are now login');
          this.router.navigate(['/dashboard']);


        }else{
          alert(data.msg);
        }
    });
  }
}
