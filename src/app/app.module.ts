import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {  FormsModule } from '@angular/forms';
import { HotelsComponent } from './hotels/hotels.component';
import { ExploreComponent } from './explore/explore.component';
import { FamousplacesComponent } from './famousplaces/famousplaces.component';
import { MusttryComponent } from './musttry/musttry.component';
import { MoreComponent } from './more/more.component';
import { HttpClientModule } from '@angular/common/http';
import { FactsComponent } from './facts/facts.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CafeComponent } from './all/cafe/cafe.component';
import { RooftopComponent } from './all/rooftop/rooftop.component';
import { ThemeComponent } from './all/theme/theme.component';
import { MallsComponent } from './all/malls/malls.component';
import { ClothComponent } from './all/cloth/cloth.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AngularFireModule } from '@angular/fire/compat';
import { ThingsComponent } from './things/things.component';
import { environment } from 'src/environments/environment.prod';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { OlaComponent } from './ola/ola.component';
import { BookmeComponent } from './bookme/bookme.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { CommonModule } from '@angular/common';
import { GeolocationComponent } from './geolocation/geolocation.component';





const routes: Routes=[
  {
    path:'', component:HomeComponent,pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  
  {
    path:'about',component:AboutComponent
  },
  {
    path:'hotel',component:HotelsComponent
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
    path:'ola',component:OlaComponent
  },
 
  {
    path:'facts',component:FactsComponent 
  },
 
  { path: 'theme', component: ThemeComponent 
},
 
  { path: 'cloth', component: ClothComponent
},
  { path: 'rooftop-restaurants', component: RooftopComponent 
},
  { path: 'malls', component: MallsComponent 
},

  { path: 'cafes', component: CafeComponent 
},
  { path: 'things', component: ThingsComponent 
},
  { path: 'register', component:RegisterComponent
},
  { path: 'bookme', component:BookmeComponent
},
  { path: 'forgot-password', component:ForgotPasswordComponent
}
  
 
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    HotelsComponent,
    ExploreComponent,
    FamousplacesComponent,
    MusttryComponent,
    MoreComponent,
    FactsComponent,
    CurrencyConverterComponent,
    CafeComponent,
    RooftopComponent,
    ThemeComponent,
    MallsComponent,
    ClothComponent,
    ThingsComponent,
     RegisterComponent,
     ForgotPasswordComponent,
     OlaComponent,
     BookmeComponent,
     GeolocationComponent

   
 
   
 
   

  ],
  imports: [
    BrowserModule, SlickCarouselModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule ,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
