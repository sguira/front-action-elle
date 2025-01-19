import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Assuree } from 'src/app/interface/assuree';
import { LoadingService } from 'src/app/service/loading.service';
import { SouscriptionService } from 'src/app/service/souscription.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent {

  clients:Assuree[]=[]
  isLoad=false;
  btnListen=false;
  clientClientId=""
  constructor(public userService:UtilisateurService,public router:Router,public loading:LoadingService,public subscription:SouscriptionService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loading.$progress.subscribe(e=>{
      this.isLoad=e;
    })

    this.userService.getClient().subscribe(value=>{

      this.clients=value.map((e:any)=>new Assuree(e['id'],e['nom'],e['telephone'],e['adresse'],e['ville'],e['cin'],e['type']))
    })
  }


  gotoSubscription(id:string){
    this.router.navigate(['list-clients',id])
  }

  changeStatus(id:string){
    this.btnListen=true;
    this.clientClientId=id
    this.subscription.editAssureStatus(id).subscribe(e=>{
      this.btnListen=false;
      this.ngOnInit();
    })
  }


}
