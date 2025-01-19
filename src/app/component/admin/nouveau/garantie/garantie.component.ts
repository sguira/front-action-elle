import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Garantie } from 'src/app/interface/garantie';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-garantie',
  templateUrl: './garantie.component.html',
  styleUrls: ['./garantie.component.scss']
})
export class GarantieComponent {

  formGarantie?:FormGroup
  responseCode:any=null;
  responseMessage:any=null;
  listGarantie:Garantie[]=[];
  constructor(public fb:FormBuilder,public admin:AdminService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formGarantie=this.fb.group({
      garantie:['',Validators.required],
      rate:['',Validators.required],
      maxAge:[''],
      minPrime:['']
    })
    this.listGarantie=this.admin.userService.getGarantie()
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
    },(e)=>{
      this.responseCode=0;
      this.responseMessage="Une erreur est survenu"
    })
  }

}
