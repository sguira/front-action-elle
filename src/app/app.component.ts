import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-front-actionelle';


  constructor(public auth:AuthService){}

  ngOnInit(): void {
    // console.log('accueil')
    if(this.auth.getToken()!=null){
      this.auth.checkToken()
    }

  }

}
