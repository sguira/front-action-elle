import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
import { SouscriptionService } from 'src/app/service/souscription.service';

@Component({
  selector: 'app-list-suscription',
  templateUrl: './list-suscription.component.html',
  styleUrls: ['./list-suscription.component.scss']
})
export class ListSuscriptionComponent {

  isLoad=false;
  data:any[]=[]
  datalength=null
  constructor(public suscriptionService:SouscriptionService,public loading:LoadingService,public router:Router,public activated:ActivatedRoute){
    // this.ngOnInit()
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loading.$progress.subscribe((e)=>{
      this.isLoad=e;
    })
    this.activated.params.subscribe(value=>{
      // console.log("I")
      console.log("Identifian"+value['id'])
      if(value['id']==undefined){
          this.suscriptionService.getSuscription(null).subscribe((res:any)=>{
          this.data=res
        })
      }
      else{
        this.suscriptionService.getSubscriptionByCustomer(value['id']).subscribe((element:any)=>{
          this.data=element
        })
      }
      // this.datalength=this.data.length;
    })
  }



}
