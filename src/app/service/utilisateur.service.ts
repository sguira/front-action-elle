import { Injectable } from '@angular/core';
import { ProduitAssure } from '../interface/produit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environnement } from 'src/environnement/environnement';
import { Categorie } from '../interface/categorie';
import { AuthService } from './auth.service';
import { Garantie } from '../interface/garantie';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  product:ProduitAssure[]=[]
  categorieVoitures:Categorie[]=[]
  url=environnement.apiUrl
  garanties:Garantie[]=[]
  private showMenuSource=new Subject<boolean>()
  $showMenu=this.showMenuSource.asObservable()

  headerAuth=new HttpHeaders({
          'Content-Type': 'application/json',
          "Access-Control-Allow-Headers":"*",
          "Authorization": `Bearer ${this.auth.getToken()}`
    })

  constructor(public http:HttpClient,public auth:AuthService) { }


  toggleMenu(){
    this.$showMenu.subscribe((e:boolean): void=>{
      if(e==true){
        this.showMenuSource.next(false)
      }
      else{
        this.showMenuSource.next(true)
      }
    })
  }

  initData(){
    this.getCategorie()
    this.getGarantie()
    this.getProduit();
  }


  //liste des produits
  getProduit(){
      // this.product=[]
      this.http.get<ProduitAssure[]>(`${this.url+"/users/products"}`,{headers:this.headerAuth}).subscribe((value)=>{
        this.product=value.map((e:any)=>(
          new ProduitAssure(e['id'],e['nomProduit'],e['categoriesElligibles'].map((c:any)=>new Categorie(c['id'],c['libelle'],c['description'],c['code'])),e['garanties'].map((g:any)=>(new Garantie(g['id'],g['name'],g['rate'],g['maxAge'],g['minPrime']))))
        ))
      })
      return this.product;
  }


  //liste des categories
  getCategorie(){
    this.http.get<Categorie[]>(this.url+'/users/categorie',{headers:this.headerAuth}).subscribe(data=>{
      console.log(data)
      this.categorieVoitures=data.map((e)=>new Categorie(e['id'],e['libelle'],e['description'],e['code']))
      console.log(this.categorieVoitures)
    })

  }
  //liste des garanties
  getGarantie(){
    this.http.get<Garantie[]>(this.url+'/users/guarante',{headers:this.headerAuth}).subscribe(data=>{
      console.log(data)
      this.garanties=data.map((e)=>new Garantie(e['id'],e['name'],e['rate'],e['maxAge'],e['minPrime']))
      console.log(this.categorieVoitures)
    })
    return this.garanties;
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



    //suppression des produit
    suppressionProduit(id:string):Observable<any>{
      return this.http.delete(`${this.url+"/admin/produit/"+id}`, {headers:this.headerAuth});
    }

  //une fonction qui retourne la liste des categories
  // à partir de leur Id
  getCategorieByIds(ids:string[]){
    let categorie=[]
    for(let id of ids){
      for(let cat of this.categorieVoitures){
        if(cat.id==id){
          categorie.push(cat)
          break;
        }
      }
    }
    return categorie
  }

  getClient():Observable<any>{
    return this.http.get(this.url+'/users/clients',{headers:this.headerAuth})
  }

}
