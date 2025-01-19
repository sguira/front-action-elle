import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.scss']
})
export class NouveauComponent {


  currentBtn="categorie"

  formCat?:FormGroup


  responseCode:any=null;
  responseMessage="Categorie ajoutée avec success"

  constructor(fb:FormBuilder,public admin:AdminService){
    this.formCat=fb.group({
      categorie:['',Validators.required],
      code:['',Validators.required],
      description:[''],
    })




  }

  changeCurrentbtn(value:string){
    this.currentBtn=value
  }


  newCategorie(){
    this.admin.saveCategorie({
      'libelle':this.formCat?.value['categorie'],
      'description':this.formCat?.value['description'],
      'code':this.formCat?.value['code'],
    }).subscribe((value)=>{
      console.log(value)
      setTimeout(()=>{
        this.responseCode=null;
        this.responseMessage="Categorie ajouté"
      },4000)
    },(e)=>{
      this.responseCode=0;
      this.responseMessage="Une erreur est survenu"
      setTimeout(()=>{
        this.responseCode=null;
        this.responseMessage=""
      },4000)
    })
  }



}
