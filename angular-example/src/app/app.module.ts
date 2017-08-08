import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CareerComponent} from './career/career.component';
import { ContactComponent } from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: 'home', component:  HomeComponent },
  { path: 'about',component:  AboutComponent },
  { path: 'contact',component:ContactComponent },
  { path: 'career',component: CareerComponent },
  { path: 'services',component: ServicesComponent } 

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CareerComponent,
    NavigationComponent,
    ServicesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
