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
import { SimulationComponent } from './component/simulation/simulation.component';
import { ListSuscriptionComponent } from './component/list-suscription/list-suscription.component';
import { ListDevisComponent } from './component/list-devis/list-devis.component';
import { DetailsDevisComponent } from './component/details-devis/details-devis.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'subscription'
  },
  {
    path:'app',component:AppComponent
  },
  {
    path:'home',component:AccueilComponent,
  },
  {
    path:'list-souscriptions',
    component:ListSuscriptionComponent
  },
  {
    path:'list-devis',
    component:ListDevisComponent
  },
  {
    path:"details-devis/:id",
    component:DetailsDevisComponent
  },
  {
    path:'subscription',component:SubscriptionComponent
  },
  { path:'login',component:LoginComponent },
  { path:'register',component:RegisterComponent },
  {path:'simulation',component:SimulationComponent},
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
