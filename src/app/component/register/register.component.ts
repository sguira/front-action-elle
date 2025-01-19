import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  resultMessage=""
  resultCode:any=null
  constructor(fb:FormBuilder,private registerService:AuthService,public loading:LoadingService,public router:Router){
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
      'telephone':this.formGroup!.value['phone'],
      'adresse':this.formGroup!.value['adresse'],
      'cin':this.formGroup!.value['cin'],
      'name':this.formGroup!.value['name']
    }
    this.registerService.register(data).subscribe((value:HttpResponse<any>)=>{
      console.log();
      this.router.navigateByUrl('/login')
    },(error)=>{
      this.resultCode=0;
      this.resultMessage="une erreur est survenue"
      console.log('error')
      setTimeout(()=>{
        this.resultCode=null;
        this.resultMessage=""
      },4000)
      console.log("Error inscription"+error)
    })
  }

}
