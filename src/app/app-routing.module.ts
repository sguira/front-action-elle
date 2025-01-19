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
import { DetailsSouscriptionComponent } from './component/details-souscription/details-souscription.component';
import { SuscripteursComponent } from './component/admin/suscripteurs/suscripteurs.component';
import { DetailAmazoneComponent } from './component/admin/detail-amazone/detail-amazone.component';
import { ListClientComponent } from './component/list-client/list-client.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'app'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'app',component:AppComponent,
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
    path:"list-devis/:id",
    component:DetailsDevisComponent
  },
  {
    path:"list-souscriptions/:id",
    component:DetailsSouscriptionComponent
  },
  {
    path:'subscription',component:SubscriptionComponent
  },
  { path:'login',component:LoginComponent },
  { path:'register',component:RegisterComponent },
  {path:'simulation',component:SimulationComponent},
  {path:'list-clients',component:ListClientComponent},
  {path:'list-clients/:id',component:ListSuscriptionComponent},
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
        path:'list-amazone/:id', component:DetailAmazoneComponent,
      },
      {
        path:'produit-assure',component:ListAmazoneComponent
      },
      {
        path:'new',component:NouveauComponent
      },
      {
        path:'souscripteurs',component:SuscripteursComponent
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
