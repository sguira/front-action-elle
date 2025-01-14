import { Injectable } from '@angular/core';
import { environnement } from '../../environnement/environnement'
import { Categorie } from '../interface/categorie';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminService } from './admin.service';
import { AuthService } from './auth.service';
import { Garantie } from '../interface/garantie';
import { ProduitAssure } from '../interface/produit';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  headerAuth=new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers":"*",
        "Authorization": `Bearer ${this.auth.getToken()}`
  })

  url=environnement.apiUrl;

  categorieVoitures:Categorie[]=[]
  garanties:Garantie[]=[];
  product:ProduitAssure[]=[]

  constructor(public http:HttpClient,public auth:AuthService) {
    // this.categorieVoitures=[]
    // this.http.get<Categorie[]>(this.url+"/users/categorie",{headers:this.headerAuth})
  }

  getCategorie(){
    this.http.get<Categorie[]>(this.url+'/users/categorie',{headers:this.headerAuth}).subscribe(data=>{
      console.log(data)
      this.categorieVoitures=data.map((e)=>new Categorie(e['id'],e['libelle'],e['description'],e['code']))
      console.log(this.categorieVoitures)
    })
  }

  getGarantie(){
    this.http.get<Garantie[]>(this.url+'/guarante',{headers:this.headerAuth}).subscribe(data=>{
      console.log(data)
      this.garanties=data.map((e)=>new Garantie(e['id'],e['name'],e['rate'],e['maxAge'],e['minPrime']))
      console.log(this.categorieVoitures)
    })
  }

  getProduit(){
    this.http.get<ProduitAssure[]>(`${this.url+"/admin/produit"}`,{headers:this.headerAuth}).subscribe((value)=>{
      this.product=value.map((e:any)=>(
        new ProduitAssure(e['id'],e['nomProduit'],e['categoriesElligibles'].map((c:any)=>new Categorie(c['id'],c['libelle'],c['description'],c['code'])),e['garanties'].map((g:any)=>(new Garantie(g['id'],g['name'],g['rate'],g['maxAge'],g['minPrime']))))
      ))
    })
  }

  initData(){
    this.getCategorie()
    this.getGarantie()
    this.getProduit();
  }


  //une fonction qui retourne la liste des categories
  // à partir de leur Id
  getCategorieByIds(ids:string[]){
    let categorie=[]
    for(var i=0;i<ids.length;i++){
      for(var j=0;j<this.categorieVoitures.length;j++){
        if(this.categorieVoitures[j].id==ids[i]){
          categorie.push(this.categorieVoitures[j])
          break;
        }
      }
    }
    return categorie
  }

  getGarantieByIds(ids:string[]){
    let garantie=[]
    for(let id of ids){
      for(let garante of this.garanties){
        if(garante.id==id){
          garantie.push(garante)
          break;
        }
      }
    }
    return garantie
  }

}
