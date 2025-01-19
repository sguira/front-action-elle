import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-souscriptions',
  templateUrl: './item-souscriptions.component.html',
  styleUrls: ['./item-souscriptions.component.scss']
})
export class ItemSouscriptionsComponent {

  @Input()
  item: any;

  constructor(public router:Router){}

  goToDetails(id:string){
    this.router.navigateByUrl('/list-souscriptions/'+id)
  }

}
