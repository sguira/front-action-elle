import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/interface/utilisateur';
import { AdminService } from 'src/app/service/admin.service';
import { LoadingService } from 'src/app/service/loading.service';
// import {httpClient} from '@angular/common/http'
@Component({
  selector: 'app-list-amazone',
  templateUrl: './list-amazone.component.html',
  styleUrls: ['./list-amazone.component.scss']
})
export class ListAmazoneComponent {

  utilisateurs?:Utilisateur[]
  isLoad=false;
  constructor(private admin:AdminService,public loading:LoadingService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loading.$progress.subscribe(e=>{
      this.isLoad=e;
    })
    this.admin.getUsers().subscribe(
      (value)=>{
        console.log(value.status)
        console.log(value)
        this.utilisateurs=value.map((e:any)=>new Utilisateur(e['id'],e['username'],e['name'],e['telephone'],e['adresse'],e['createdAt'],e['cin']))

      }
    )
  }


}
