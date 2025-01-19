import { Injectable } from '@angular/core';
import {environnement} from '../../environnement/environnement';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl=environnement.apiUrl;

  isAuth:boolean=false;
  isAdmin:boolean=false;

  constructor(public http:HttpClient,private router:Router) {
    // this.checkToken()
  }


  saveLoginData(token:string,roles:string,id:string){
    localStorage.setItem('accessToken',token);
    localStorage.setItem('ROLE',roles),
    localStorage.setItem('USER_ID',id)
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }

  getRole(){
    return localStorage.getItem('ROLE');
  }

  getUserId(){
    return localStorage.getItem('USER_ID')
  }


  register(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/auths/register`,data)
  }

  login(username:string,password:string):Observable<any>{
    const data={
      'username':username,
      'password':password
    }
    return this.http.post<HttpResponse<any>>(`${this.baseUrl}/auths/login`,data)
  }

  checkToken():Observable<any>|any{
   const token=this.getToken()
    if(token!=null){
      this.http.get(`${this.baseUrl}/auths/check-token`,{params:{"token":token}}).subscribe((value)=>{

        if(value==false){
          console.log("ok")
          // this.isAuth=true;
          this.isAuth=true
          if(this.getRole()=='ROLE_ADMIN'){
            this.isAdmin=true
            this.router.navigateByUrl('/admin')
          }
          else{
            this.isAdmin=false;
            this.router.navigateByUrl('home')
          }
        }
        else{
          this.router.navigateByUrl('/login')
        }
      })
    }
    return null;
  }

}
