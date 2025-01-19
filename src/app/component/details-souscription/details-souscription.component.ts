import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
import { SouscriptionService } from 'src/app/service/souscription.service';

@Component({
  selector: 'app-details-souscription',
  templateUrl: './details-souscription.component.html',
  styleUrls: ['./details-souscription.component.scss']
})
export class DetailsSouscriptionComponent {


    id:string='';
    data:any
    isLoad=false;
    showAlert=false;
    constructor(public route:ActivatedRoute,private sousCriptionService:SouscriptionService,private loading:LoadingService){}

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.loading.$progress.subscribe(value=>{
        this.isLoad=value
      })
      this.route.params.subscribe(params => {
        console.log(params);
        this.sousCriptionService.getSuscription('/'+params['id']).subscribe(value=>{
          this.data=value
        })
      });
    }

    changeAssureStatus(id:string){
      this.sousCriptionService.editAssureStatus(id).subscribe((e)=>{
        this.data['assuree']=e
      },(Error)=>{
        this.showAlert=true
        setTimeout(()=>{
          this.showAlert=false;
        },3000)
      })
    }

    downloadAttestation(){
      this.sousCriptionService.getAttestation(this.data['id']).subscribe((e)=>{
        const blob=new Blob([e],{
          type:'application/pdf'
        })
        const url=window.URL.createObjectURL(blob


        )
        window.open(url,'blank')
      })
    }

}
