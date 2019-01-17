import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { Token } from '@angular/compiler';
//import {tokenNotExpired} from 'angular2-jwt';
//import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken:any;
  username: any;
  user:any;

  constructor(private http:Http) { }

  
  storeUserData(token,username){
    localStorage.setItem('id_token',token);
    localStorage.setItem('id_username', username);
    this.authToken=token;
    this.username = username;
  }

  loadToken(){
    const token=localStorage.getItem('id_token');
    const username = localStorage.getItem('id_username');
    this.authToken=token;
    this.username = username;
  }


  logout(){
    this.authToken=null;
    this.username=null;
    localStorage.clear();
  }

isLoggedIn(){
  if(localStorage.getItem('id_token')){
    return true;
  }
  return false;
}

  registerUser(user){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register',user,{headers:headers})
    .pipe(map((response: any) => response.json()));
    }
  
    authenticateUser(user) {
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
      .pipe(map((response: any) => response.json()));
    }
  
  
    getProfile(){
      let headers = new Headers();
      this.loadToken();
      headers.append('authorization',this.authToken);
      headers.append('Content-Type','application/json');
      headers.append('username', this.username );
      return this.http.get('http://localhost:3000/users/profile',  {headers: headers})
      .pipe(map((response: any) => response.json()));
    }

}

