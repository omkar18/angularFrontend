import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isTokenAvailable: Boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private authservice:AuthService,
    private breakpointObserver: BreakpointObserver,
    private router:Router
    ) { }

  ngOnInit() {
    if(localStorage.getItem('id_token')){
this.isTokenAvailable = true;
    }else{
      this.isTokenAvailable = false;
    }
  }

  onLogoutClick(){
    this.authservice.logout();
    alert("you are logged out");
    this.router.navigate(['/login']);
  }



}
