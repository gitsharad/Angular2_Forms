import { Component, OnInit } from '@angular/core';
import { WorkExperience } from "../../myservices/workexp.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {
  subscription : Subscription;
  workexplist:any;
  constructor(private workexp : WorkExperience) { 

    this.subscription=workexp.getWoekExp().subscribe(
      workexplist=>{
        this.workexplist=workexplist;
      },
       err => {
           console.log("Erroor Occured");
        }
    );

  }
  ngOnInit() {
  }

}
