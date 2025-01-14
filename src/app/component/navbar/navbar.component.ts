import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showMenu=false;

  constructor(public router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.navigateByUrl('/subscription')
  }

  logout(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('ROLE');
    this.auth.isAdmin=false;
    this.auth.isAuth=false;
    this.router.navigate(['/login']);
  }

  viewMobileMenu(){
    this.showMenu=!this.showMenu;
  }

}
