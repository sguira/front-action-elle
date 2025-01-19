import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  routeActive:any;

  showMobileMenu=false;

  constructor(private router:Router,private auth:AuthService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.auth.getToken()){
      this.auth.checkToken()
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  logout(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('ROLE');
    this.router.navigateByUrl('login')
  }

  toggleMobileMenu(){
    this.showMobileMenu=!this.showMobileMenu
  }

}
