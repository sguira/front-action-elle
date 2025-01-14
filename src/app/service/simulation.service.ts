import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environnement } from 'src/environnement/environnement';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  url=environnement.apiUrl

  headerAuth=new HttpHeaders({
          'Content-Type': 'application/json',
          // "Access-Control-Allow-Headers":"*",
          "Authorization": "Bearer "+this.auth.getToken()
  })

  constructor(public http:HttpClient,public auth:AuthService) { }

  //méthode pour éffectuer une simulation
  makeSimulation(data:Object):Observable<any>{
    return this.http.post(`${this.url}/simulations`,data,{headers:this.headerAuth})
  }

  //méthode qui retourne la liste des dévis crée par un utilisateur
  getDevis():Observable<any>{
    return this.http.get(`${this.url}/simulations`,{headers:this.headerAuth})
  }

}
