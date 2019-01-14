import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice:AuthService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authservice.logout();
    alert("you are logged out");
    this.router.navigate(['/login']);
  }

}
