import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String

  constructor(private authservice: AuthService, private validateService: ValidateService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {

    const user = {
      username: this.username,
      password: this.password
    }

    if (!this.validateService.validateLogin(user)) {
      alert("Fill all fields");
    }

    this.authservice.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authservice.storeUserData(data.token, data.user.username);
        alert('you are now login');
        this.router.navigate(['/dashboard']);
      } else {
        alert(data.msg);
      }
    });
  }
}
