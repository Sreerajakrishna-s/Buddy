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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FactsComponent } from './facts/facts.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CafeComponent } from './all/cafe/cafe.component';
import { RooftopComponent } from './all/rooftop/rooftop.component';
import { ThemeComponent } from './all/theme/theme.component';
import { MallsComponent } from './all/malls/malls.component';
import { ClothComponent } from './all/cloth/cloth.component';
import { ArtComponent } from './all/art/art.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AngularFireModule } from '@angular/fire/compat';
import { ThingsComponent } from './things/things.component';
import { environment } from 'src/environments/environment.prod';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatDialogModule } from '@angular/material/dialog';






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
  
  { path: 'art', component:ArtComponent
},
  { path: 'register', component:RegisterComponent
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
