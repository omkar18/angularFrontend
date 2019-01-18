import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthGuard} from '../../Guards/auth.guard'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private authservice:AuthService,
    private breakpointObserver: BreakpointObserver,
    private authGuard:AuthGuard,
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
