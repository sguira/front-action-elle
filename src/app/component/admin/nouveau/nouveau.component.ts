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
  formGarantie?:FormGroup

  constructor(fb:FormBuilder,public admin:AdminService){
    this.formCat=fb.group({
      categorie:['',Validators.required],
      code:['',Validators.required],
      description:[''],
    })

    this.formGarantie=fb.group({
      garantie:['',Validators.required],
      rate:['',Validators.required],
      maxAge:[''],
      minPrime:['']
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
    })
  }

  newGarantie(){
    this.admin.saveGarantie({
      'name':this.formGarantie?.value['garantie'],
      'maxAge':this.formGarantie?.value['maxAge'],
      'rate':this.formGarantie?.value['rate'],
      'minPrime':this.formGarantie?.value['minPrime'],
    }).subscribe((value)=>{
      console.log(value)
      this.formGarantie!.reset()
    })
  }

}
