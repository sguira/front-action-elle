import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  formGroup?:FormGroup;

  constructor(fb:FormBuilder,private registerService:AuthService){
    this.formGroup=fb.group({
      username:['',Validators.required],
      name:['',Validators.required],
      phone:['',Validators.required],
      adresse:['',Validators.required],
      password:['',Validators.required],
      cin:['',Validators.required]
    })
  }


  onCreate(){
    const data={
      'username':this.formGroup!.value['username'],
      'password':this.formGroup!.value['password'],
      'telephone':this.formGroup!.value['telephone'],
      'adresse':this.formGroup!.value['adresse'],
      'cin':this.formGroup!.value['cin']
    }
    this.registerService.register(data).subscribe((value:HttpResponse<any>)=>{
      console.log(value.status);
    },(error)=>{
      console.log("Error inscription"+error)
    })
  }

}
