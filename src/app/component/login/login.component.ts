// import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { MatCard, MatCardActions } from '@angular/material/card';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LoadingService } from 'src/app/service/loading.service';

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

  message:string='';
  type?:number;
  viewMessage:boolean=false;
  isLoad:boolean=false;
  constructor(form:FormBuilder,private auth:AuthService,public router:Router,public loading:LoadingService){
    this.formGroup=form.group({
      username:new FormControl(null,[Validators.email]),
      password:new FormControl(null,Validators.required)
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loading.$progress.subscribe((e)=>{
      this.isLoad=e;
    })
    // if(this.auth.getToken()!=null){
    //   this.auth.checkToken()
    // }
  }


  onCreate(){}

  onLogin(){
    // console.log(this.formGroup?.value);
    this.auth.login(this.formGroup!.value['username'],this.formGroup!.value['password']).subscribe((value)=>{

      try{
        console.log(value)
        this.auth.saveLoginData(value['token'],value['role'],value['userId'])
        if(value['role']=='ROLE_ADMIN'){
          this.router.navigateByUrl('/admin')
        }
        else{
          this.router.navigateByUrl('')
        }
      }
      catch(e){

      }

    },(error)=>{
      this.viewMessage=true
      this.message="Vérifiez vos données"
      this.type=0;

    })
  }



  closeAlert(){
    this.viewMessage=false;
    this.message='';
    this.type=0;
  }



}
