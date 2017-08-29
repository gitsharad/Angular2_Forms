import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { SkillsService } from "./myservices/skills.service";
import { HttpModule } from '@angular/http';
import { WorkexperienceComponent } from './Components/workexperience/workexperience.component';
import { AboutmeComponent } from './Components/aboutme/aboutme.component';
import { SkillsetsComponent } from './Components/skillsets/skillsets.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component'; 
import { PortfolioService } from "./myservices/portfolio.service";
import { EducationComponent } from './Components/education/education.component';

const appRoutes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'home', component:  HomeComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    WorkexperienceComponent,
    AboutmeComponent,
    SkillsetsComponent,
    PortfolioComponent,
    EducationComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule
  ],
  providers: [SkillsService,PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
