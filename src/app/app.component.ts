import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

import { UtilisateurService } from './service/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-front-actionelle';


  constructor(public auth:AuthService,public usersService:UtilisateurService,public router:Router){}

  ngOnInit(): void {
    // console.log('accueil')
    if(this.auth.getToken()!=null){
      this.auth.checkToken()
      this.usersService.initData()
    }
    else{
      this.router.navigateByUrl('/login')
    }

  }

}
