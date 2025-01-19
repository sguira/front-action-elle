import { Inject, Injectable } from '@angular/core';
import { Utilisateur } from '../interface/utilisateur';
import { environnement } from 'src/environnement/environnement';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Souscripteur } from '../interface/souscripteur';
import { UtilisateurService } from './utilisateur.service';

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

  constructor(private http:HttpClient,private admin:AuthService,public userService:UtilisateurService) { }

  getUsers():Observable<any>{

    return this.http.get(`${this.url}/admin/users`,{headers:this.headerAuth})
  }



  //ajouter une nouvelle categorie
  saveCategorie(data:Object):Observable<any>{
    return this.http.post(`${this.url}/admin/categorie`,data,{headers:this.headerAuth})
  }

  //ajouter garantie
  saveGarantie(data:Object):Observable<any>{
    return this.http.post(`${this.url}/admin/guarante`,data,{headers:this.headerAuth})
  }

  //ajouter un produit
  saveProduit(data:Object):Observable<any>{
    return this.http.post(`${this.url}/admin/produit`,data,{headers:this.headerAuth})
  }


  //retourne la liste des souscripteurs
  getSouscripteurs():Observable<Souscripteur[]>{
    return this.http.get<Souscripteur[]>(`${this.url}/admin/souscripteurs`,{headers:this.headerAuth});

  }

  //supprimer un produit
  deleteProduit(id:string):Observable<any>{
    return this.http.delete(`${this.url}/admin/produit/${id}`, {headers:this.headerAuth})
  }

  //retourrne les souscriptions pour un utilisateurs
  getSouscriptionsByUser(id:string):Observable<any>{
    return this.http.get(`${this.url}/admin/souscriptions`,{headers:this.headerAuth,params:{"amazoneId":id}})
  }

}
