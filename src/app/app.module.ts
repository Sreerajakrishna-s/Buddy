import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './places/places.component';
import { LoginComponent } from './login/login.component';
import {  FormsModule } from '@angular/forms';
import { HotelsComponent } from './hotels/hotels.component';
import { ExploreComponent } from './explore/explore.component';
import { FamousplacesComponent } from './famousplaces/famousplaces.component';
import { MusttryComponent } from './musttry/musttry.component';
import { MoreComponent } from './more/more.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FactsComponent } from './facts/facts.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { MapsComponent } from './maps/maps.component';







const routes: Routes=[
  {
    path:'', component:HomeComponent,pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'places',component:PlacesComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'hotels',component:HotelsComponent
  },
  {
    path:'explore',component:ExploreComponent
  },
  {
    path:'famousplaces',component:FamousplacesComponent
  },
  {
    path:'more',component:MoreComponent
  },
  {
    path:'musttry',component:MusttryComponent
  },
  {
    path:'convert',component:CurrencyConverterComponent 
  },
 
  {
    path:'facts',component:FactsComponent 
  },
 
  {
    path:'maps',component:MapsComponent 
  },
 
  
 
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    PlacesComponent,
    LoginComponent,
    HotelsComponent,
    ExploreComponent,
    FamousplacesComponent,
    MusttryComponent,
    MoreComponent,
    FactsComponent,
    CurrencyConverterComponent,
    MapsComponent,
 
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
