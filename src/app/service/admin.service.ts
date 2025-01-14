import { Injectable } from '@angular/core';
import { Utilisateur } from '../interface/utilisateur';
import { environnement } from 'src/environnement/environnement';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url=environnement.apiUrl;

  headerAuth=new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Acces-Controll-Request-Method":"*",
      "Access-Controll-Request-Headers":"*",
      "Authorization": `Bearer ${this.admin.getToken()}`
  })

  constructor(private http:HttpClient,private admin:AuthService) { }

  getUsers():Observable<any>{

    return this.http.get(`${this.url}/admin/users`,{headers:this.headerAuth})
  }



  //ajouter une nouvelle categorie
  saveCategorie(data:Object):Observable<any>{
    return this.http.post(`${this.url}/admin/categorie`,data,{headers:this.headerAuth})
  }

  //ajouter garantie
  saveGarantie(data:Object):Observable<any>{
    return this.http.post(`${this.url}/guarante`,data,{headers:this.headerAuth})
  }

  //ajouter un produit
  saveProduit(data:Object):Observable<any>{
    return this.http.post(`${this.url}/admin/produit`,data,{headers:this.headerAuth})
  }


}
