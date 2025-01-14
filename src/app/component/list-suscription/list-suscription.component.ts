import { Component } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';
import { SouscriptionService } from 'src/app/service/souscription.service';

@Component({
  selector: 'app-list-suscription',
  templateUrl: './list-suscription.component.html',
  styleUrls: ['./list-suscription.component.scss']
})
export class ListSuscriptionComponent {

  isLoad=false;
  data:any
  constructor(public suscriptionService:SouscriptionService,public loading:LoadingService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loading.$progress.subscribe((e)=>{
      this.isLoad=e;
    })
    this.suscriptionService.allSuscription().subscribe((res:any)=>{
      this.data=res
    })
  }

}
