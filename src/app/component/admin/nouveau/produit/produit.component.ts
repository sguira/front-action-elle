import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/interface/categorie';
import { Garantie } from 'src/app/interface/garantie';
import { ProduitAssure } from 'src/app/interface/produit';
import { AdminService } from 'src/app/service/admin.service';


// import {
//   MatSnackBar,
//   MatSnackBarAction,
//   MatSnackBarActions,
//   MatSnackBarLabel,
//   MatSnackBarRef,
// } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent {

  formProduit?:FormGroup
  listCheck:string[]=[]
  listCheckCat:string[]=[]
  responseCode:any=null;
  responseMessage:any=null;
  listeProducts:ProduitAssure[]=[]

  constructor(public fb:FormBuilder,public admin:AdminService){
    this.formProduit = this.fb.group({
      name:['',Validators.required]
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initlist()
  }

  initlist(){
    this.listeProducts=[]
    this.listeProducts=this.admin.userService.getProduit()
  }

  checkElement(id:string){
    if(!this.listCheck.includes(id)){
      this.listCheck.push(id)
    }
    else{
      this.listCheck.splice(this.listCheck.indexOf(id),1)
    }
  }

  isCheck(id:string){
    return this.listCheck.includes(id)
  }

  checkElementCategorie(id:string){
    if(!this.listCheckCat.includes(id)){
      this.listCheckCat.push(id)
    }
    else{
      this.listCheckCat.splice(this.listCheckCat.indexOf(id),1)
    }
  }

  //selection des categories pour un produit
  isCheckCategorie(id:string){
    return this.listCheckCat.includes(id)
  }

  //supprimer un produit
  suppressionProduit(id:string){
    this.admin.deleteProduit(id).subscribe(e=>{
      this.initlist()
    })
  }



  addProduit(){
    let data={
      "categoriesElligibles":this.transformClassToObject(this.admin.userService.getCategorieByIds(this.listCheckCat)),
      "garanties":this.transformGarantieToListObject(this.admin.userService.getGarantieByIds(this.listCheck)),
      "nomProduit":this.formProduit!.value['name']
    };

    console.log(this.formProduit)
    console.log(data)

    this.admin.saveProduit(data).subscribe((e)=>{
      this.formProduit?.reset()
      this.responseCode=1;
      this.responseMessage="Produit Ajouté"
      this.listCheckCat=[]
      this.listCheck=[]
      setTimeout(()=>{
        this.responseCode=null;
        this.responseMessage=""
      },4000)
    }
    ,(e)=>{
      this.responseCode=0;
      this.responseMessage="Une erreur est survenu"
      setTimeout(()=>{
        this.responseCode=null;
        this.responseMessage=""
      },4000)
    }
    )
  }

  transformClassToObject(categories:Categorie[]):any[]{
    var data:any[]=[];
    categories.forEach(element => {
      data.push({
        "id":element.id,
        "libele":element.libelle,
        "description":element.description,
        "code":element.code,
      })
    });

    return data;

  }

  transformGarantieToListObject(categories:Garantie[]):any[]{
    var data:any[]=[];
    categories.forEach(element => {
      data.push({
        "id":element.id,
        "name":element.name,
        "minPrime":element.minPrime,
        "maxAge":element.maxAge,
      })
    });

    return data;

  }



}

// export class SnackBarAnnotatedComponentExample {
//   private _snackBar = inject(MatSnackBar);

//   durationInSeconds = 5;

//   openSnackBar() {
//     this._snackBar.openFromComponent(ProduitComponent, {
//       duration: this.durationInSeconds * 1000,
//     });
//   }
// }
