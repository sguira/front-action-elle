import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  formGroup?:FormGroup;
  isLoad:boolean=false;

  constructor(fb:FormBuilder,private registerService:AuthService,public loading:LoadingService){
    this.formGroup=fb.group({
      username:['',Validators.required],
      name:['',Validators.required],
      phone:['',Validators.required],
      adresse:['',Validators.required],
      password:['',Validators.required],
      cin:['',Validators.required]
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loading.$progress.subscribe(e=>{
      this.isLoad=e;
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
