import { Component } from '@angular/core';
import { Souscripteur } from 'src/app/interface/souscripteur';
import { AdminService } from 'src/app/service/admin.service';
import { PhonePipe } from 'src/app/pipes/phone';
import { LoadingService } from 'src/app/service/loading.service';
@Component({
  selector: 'app-suscripteurs',
  templateUrl: './suscripteurs.component.html',
  styleUrls: ['./suscripteurs.component.scss']
})
export class SuscripteursComponent {

  souscripteurs:Souscripteur[]=[]
  isLoad=false;
  constructor(private admin:AdminService,public loading:LoadingService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loading.$progress.subscribe(e=>{
      this.isLoad=e;
    })
    this.admin.getSouscripteurs().subscribe(e=>{
      this.souscripteurs=[]
      this.souscripteurs=e.map(value=>new Souscripteur(value['nom'],value['adresse'],value['telephone'],value['cin'],value['ville'],value['type']))
    })
  }

}
