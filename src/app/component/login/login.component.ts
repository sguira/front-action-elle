import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCard, MatCardActions } from '@angular/material/card';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // declare '' MatCardActions.align=

  // username:string="";
  // password:string="";

  formGroup?:FormGroup;

  constructor(form:FormBuilder,private auth:AuthService,public router:Router){
    this.formGroup=form.group({
      username:new FormControl(null,[Validators.email]),
      password:new FormControl(null,Validators.required)
    })
  }


  onCreate(){}

  onLogin(){
    // console.log(this.formGroup?.value);
    this.auth.login(this.formGroup!.value['username'],this.formGroup!.value['password']).subscribe((value)=>{

      try{
        console.log(value)
        this.auth.saveLoginData(value['token'],value['role'])
        if(value['role']=='ROLE_ADMIN'){
          this.router.navigateByUrl('/admin')
        }
        else{
          this.router.navigateByUrl('')
        }
      }
      catch(e){

      }

    })
  }

}
