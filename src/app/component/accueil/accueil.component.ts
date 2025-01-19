import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  constructor(public router:Router) {

    // this.router.navigateByUrl('/login')
   }

  ngOnInit(): void {
    this.router.navigateByUrl('/subscription')
  }

}
