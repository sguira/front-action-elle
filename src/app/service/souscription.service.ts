import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environnement } from 'src/environnement/environnement';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SouscriptionService {

  url=environnement.apiUrl;

  headerAuth=new HttpHeaders({
            'Content-Type': 'application/json',
            // "Access-Control-Allow-Headers":"*",
            "Authorization": "Bearer "+this.auth.getToken()
    })

  constructor(public http: HttpClient,public auth:AuthService) { }

  saveSouscription(data:Object):Observable<any>{
    return this.http.post(this.url + '/souscriptions',data,{headers:this.headerAuth})
  }

  allSuscription():Observable<any>{
    return this.http.get(`${this.url}/souscriptions`,{headers:this.headerAuth})
  }
}
