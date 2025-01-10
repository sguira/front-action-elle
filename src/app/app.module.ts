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
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { AdminComponent } from './component/admin/admin/admin.component';
import { ListAmazoneComponent } from './component/admin/list-amazone/list-amazone.component';
import { AssureeComponent } from './component/admin/assuree/assuree.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SubscriptionComponent } from './component/subscription/subscription.component';
import { SimulationComponent } from './component/simulation/simulation.component';
import { NouveauComponent } from './component/admin/nouveau/nouveau.component';
import { MatFormFieldModule} from '@angular/material/form-field'
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
    NouveauComponent

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
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
