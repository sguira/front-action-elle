import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './component/accueil/accueil.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import {MatCardModule} from '@angular/material/card';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { AdminComponent } from './component/admin/admin/admin.component';
import { ListAmazoneComponent } from './component/admin/list-amazone/list-amazone.component';
import { AssureeComponent } from './component/admin/assuree/assuree.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SubscriptionComponent } from './component/subscription/subscription.component';
import { SimulationComponent } from './component/simulation/simulation.component';
import { NouveauComponent } from './component/admin/nouveau/nouveau.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AlertComponent } from './component/widget/alert/alert.component'
import { LoadingHttpInterceptor } from './loading-http.interceptor';
import { SpinnerButtonComponent } from './component/widget/spinner-button/spinner-button.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProduitComponent } from './component/admin/nouveau/produit/produit.component';
import { ListSuscriptionComponent } from './component/list-suscription/list-suscription.component';
import { ListDevisComponent } from './component/list-devis/list-devis.component';
import { DetailsDevisComponent } from './component/details-devis/details-devis.component';
import { SpinnerComponent } from './component/widget/spinner/spinner.component';
// import 'angular-spinner';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ListAmazoneComponent,
    AssureeComponent,
    NavbarComponent,
    SubscriptionComponent,
    SimulationComponent,
    NouveauComponent,
    AlertComponent,
    SpinnerButtonComponent,
    ProduitComponent,
    ListSuscriptionComponent,
    ListDevisComponent,
    DetailsDevisComponent,
    SpinnerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:LoadingHttpInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
