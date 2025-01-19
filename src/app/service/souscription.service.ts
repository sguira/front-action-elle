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
    return this.http.post(this.url + '/subscriptions',data,{headers:this.headerAuth})
  }

  getSuscription(id:string|null):Observable<any>{
    return this.http.get(`${this.url}/subscriptions${id??''}`,{headers:this.headerAuth})
  }

  //changer le statut d'un assuré
  editAssureStatus(id:string):Observable<any>{
    return this.http.patch(this.url+"/subscriptions/statusAssuree/"+id,{},{headers:this.headerAuth})
  }

  //liste de souscription par clients
  getSubscriptionByCustomer(id:string){
    return this.http.get(`${this.url}/subscriptions/clients/${id}`,{headers:this.headerAuth})
  }


  //charger une attestation
  getAttestation(id:string):Observable<any>{
    return this.http.get(`${this.url}/subscriptions/${id}/attestation`,{headers:this.headerAuth, responseType:'blob'})
  }
}
