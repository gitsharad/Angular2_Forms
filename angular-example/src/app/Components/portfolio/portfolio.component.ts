import { Component, OnInit } from '@angular/core';
import { PortfolioService } from "../../myservices/portfolio.service";
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
   subscription:Subscription;
   portfoliolists:any;

  constructor(private portfolioservice:PortfolioService) { 
 
        this.subscription=portfolioservice.getPortfolio().subscribe(
        portfoliolist=>{
           this.portfoliolists=portfoliolist;
        },
        err => {
           console.log("Erroor Occured");
        }
        );

  }

  ngOnInit() {
  }

}
