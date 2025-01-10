import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {

  currentForm:number=1

  formVehicule:FormGroup=this.fb.group({

  })

  constructor(public fb:FormBuilder){

  }

  nextForm(){
    console.log("suivant")
    if(this.currentForm<3){
      this.currentForm=this.currentForm+1;
    }
  }

  backForm(){
    console.log("suivant")
    if(this.currentForm>1){
      this.currentForm=this.currentForm-1;
    }
  }

}
