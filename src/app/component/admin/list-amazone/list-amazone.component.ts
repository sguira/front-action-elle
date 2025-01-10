import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/interface/utilisateur';
import { AdminService } from 'src/app/service/admin.service';
// import {httpClient} from '@angular/common/http'
@Component({
  selector: 'app-list-amazone',
  templateUrl: './list-amazone.component.html',
  styleUrls: ['./list-amazone.component.scss']
})
export class ListAmazoneComponent {

  utilisateurs?:Utilisateur[]

  constructor(private admin:AdminService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.admin.getUsers().subscribe(
      (value)=>{
        console.log(value.status)
        console.log(value)
        this.utilisateurs=value.map((e:any)=>new Utilisateur(e))

      }
    )
  }

}
