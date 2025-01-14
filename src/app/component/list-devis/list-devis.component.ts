import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimulationService } from 'src/app/service/simulation.service';

@Component({
  selector: 'app-list-devis',
  templateUrl: './list-devis.component.html',
  styleUrls: ['./list-devis.component.scss']
})
export class ListDevisComponent {

  data:any[]=[];

  constructor(public simulationService: SimulationService,public router:Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.simulationService.getDevis().subscribe(value => {
      this.data = value;
      console.log(value)
    });
  }


  goToDetails(item:any){
    let sendData=this.data;
    this.router.navigateByUrl(`/details-devis/${item['id']}?data=${encodeURIComponent(JSON.stringify(item))}`,{state:{item}})
  }


}
