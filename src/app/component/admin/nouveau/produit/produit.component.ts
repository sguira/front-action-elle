import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/interface/categorie';
import { Garantie } from 'src/app/interface/garantie';
import { AdminService } from 'src/app/service/admin.service';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent {

  formProduit?:FormGroup
  listCheck:string[]=[]
  listCheckCat:string[]=[]

  constructor(public fb:FormBuilder,public categorie:CategorieService,public admin:AdminService){
    this.formProduit = this.fb.group({
      name:['',Validators.required]
    })
  }

  checkElement(id:string){
    if(!this.listCheck.includes(id)){
      this.listCheck.push(id)
    }
  }

  isCheck(id:string){
    return this.listCheck.includes(id)
  }

  checkElementCategorie(id:string){
    if(!this.listCheckCat.includes(id)){
      this.listCheckCat.push(id)
    }
  }

  isCheckCategorie(id:string){
    return this.listCheckCat.includes(id)
  }



  addProduit(){
    let data={
      "categoriesElligibles":this.transformClassToObject(this.categorie.getCategorieByIds(this.listCheckCat)),
      "garanties":this.transformGarantieToListObject(this.categorie.getGarantieByIds(this.listCheck)),
      "nomProduit":this.formProduit!.value['name']
    };

    console.log(this.formProduit)
    console.log(data)

    this.admin.saveProduit(data).subscribe((e)=>{
      this.formProduit?.reset()
    })
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
