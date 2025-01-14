import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { CategorieService } from './service/categorie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-front-actionelle';


  constructor(public auth:AuthService,public categorieService:CategorieService){}

  ngOnInit(): void {
    // console.log('accueil')
    if(this.auth.getToken()!=null){
      this.auth.checkToken()
      this.categorieService.initData()
    }

  }

}
