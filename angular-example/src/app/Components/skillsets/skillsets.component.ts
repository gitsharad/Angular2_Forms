import { Component, OnInit } from '@angular/core';
import { SkillsService } from "../../myservices/skills.service";
import { Subscription } from 'rxjs/Subscription';
import {MdSliderModule} from '@angular/material';
@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.css'],
  providers:[MdSliderModule]
})
export class SkillsetsComponent implements OnInit {

   subscription: Subscription;
   myskills: any;
   
  constructor(private skillservice:SkillsService,private mdslidermodule:MdSliderModule) {
   
      this.subscription=this.skillservice.getSkills().subscribe(
        skills=>{
           this.myskills=skills;
        },
        err => {
           console.log("Erroor Occured");
        }
      ); 
   }

  ngOnInit() {
  }

}
