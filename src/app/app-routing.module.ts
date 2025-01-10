import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminComponent } from './component/admin/admin/admin.component';
import { ListAmazoneComponent } from './component/admin/list-amazone/list-amazone.component';
import { AppComponent } from './app.component';
import { SubscriptionComponent } from './component/subscription/subscription.component';
import { NouveauComponent } from './component/admin/nouveau/nouveau.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'app'
  },
  {
    path:'app',component:AppComponent
  },
  {
    path:'home',component:AccueilComponent,

  },
  {
    path:'subscription',component:SubscriptionComponent
  },
  { path:'login',component:LoginComponent },
  { path:'register',component:RegisterComponent },
  {
    path:'admin',component:AdminComponent,
    children:[
      {
        path:'',redirectTo:'new',pathMatch:'full'
      },
      {
        path:'list-amazone',component:ListAmazoneComponent
      },
      {
        path:'produit-assure',component:ListAmazoneComponent
      },
      {
        path:'new',component:NouveauComponent
      }
    ]

  },

  {
    path:"**",redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
