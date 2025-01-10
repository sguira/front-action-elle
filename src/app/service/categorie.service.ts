import { Injectable } from '@angular/core';
import { environnement } from '../../environnement/environnement'
import { Categorie } from '../interface/categorie';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminService } from './admin.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  headerAuth=new HttpHeaders({
        'Content-Type': 'application/json',

        Authorization: `Bearer ${this.auth.getToken()}`
    })

  url=environnement.apiUrl;

  categorieVoitures:Categorie[]=[]

  constructor(public http:HttpClient,public auth:AuthService) {
    this.categorieVoitures=[]
    this.http.get<Categorie[]>(this.url+"/categorie").subscribe(data=>{
      this.categorieVoitures=data.map((e)=>new Categorie(e))
    })
  }

  getCategorie():Observable<any>{
    return this.http.get(this.url+'/categorie')
  }
}
