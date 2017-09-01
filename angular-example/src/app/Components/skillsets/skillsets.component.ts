import { Component, OnInit } from '@angular/core';
import { SkillsService } from "../../myservices/skills.service";
import { Subscription } from 'rxjs/Subscription';
import {MdProgressBarModule} from '@angular/material';
@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.css'],
  providers:[MdProgressBarModule]
})
export class SkillsetsComponent implements OnInit {

   subscription: Subscription;
   myskills: any;
   color = 'primary';
   mode = 'determinate';
   value = 50;
   bufferValue = 75;
  constructor(private skillservice:SkillsService,private mdprogressbar:MdProgressBarModule) {
   
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
