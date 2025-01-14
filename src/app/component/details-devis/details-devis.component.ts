import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimulationService } from 'src/app/service/simulation.service';

@Component({
  selector: 'app-details-devis',
  templateUrl: './details-devis.component.html',
  styleUrls: ['./details-devis.component.scss']
})
export class DetailsDevisComponent {



  data:any=null;
  id:string=""
  constructor(public activatedRoute:ActivatedRoute,public serviceSimulation:SimulationService ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this.data=history.state.data
    // console.log("données details"+this.data)

    this.activatedRoute.params.subscribe(value=>{
      console.log("Identifiant:"+value['id'])
      this.id=value['id']
      if(this.id!=""){
        this.serviceSimulation.getDevis("/"+this.id).subscribe((value)=>{
          this.data=value;
          console.log(this.data)
        })
      }
    })
  }

}
