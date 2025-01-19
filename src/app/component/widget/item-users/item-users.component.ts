import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/interface/utilisateur';

@Component({
  selector: 'app-item-users',
  templateUrl: './item-users.component.html',
  styleUrls: ['./item-users.component.scss']
})
export class ItemUsersComponent {


  @Input()
  item:Utilisateur|null=null

  constructor(public router:Router) { }

  gotoDetail(id:string){
    console.log("Identifiant "+id)
    this.router.navigateByUrl("/admin/list-amazone/"+id)
  }

}
