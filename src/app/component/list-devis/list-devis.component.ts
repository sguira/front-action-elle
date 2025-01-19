import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
import { SimulationService } from 'src/app/service/simulation.service';

@Component({
  selector: 'app-list-devis',
  templateUrl: './list-devis.component.html',
  styleUrls: ['./list-devis.component.scss']
})
export class ListDevisComponent {

  data:any[]=[];
  isLoad:boolean=false;
  dataLength:number|null=null;
  constructor(public simulationService: SimulationService,public router:Router,public loading:LoadingService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loading.$progress.subscribe(e=>{
      this.isLoad=e;
    })
    this.simulationService.getDevis(null).subscribe(value => {
      this.data = value;
      console.log(value)
      this.dataLength=this.data.length
    });
  }


  goToDetails(item:any){
    // let sendData=this.data;
    this.router.navigateByUrl(`/list-devis/${item['id']}`)
  }


}
