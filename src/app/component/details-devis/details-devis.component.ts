import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-devis',
  templateUrl: './details-devis.component.html',
  styleUrls: ['./details-devis.component.scss']
})
export class DetailsDevisComponent {


  data:any[]=[]

  constructor(public activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this.data=history.state.data
    // console.log("données details"+this.data)

    this.activatedRoute.params.subscribe(params=>{
      console.log("Mes paramètres"+params['data'])
      this.data=params['data']?JSON.parse(decodeURIComponent(params['data'])):null;
      console.log(this.data)
    })
  }

}
