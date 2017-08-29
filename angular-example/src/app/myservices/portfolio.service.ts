import { Injectable } from "@angular/core";
import { Http} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()

export class PortfolioService{
     
    constructor(private http:Http){
    }

    getPortfolio(){
         return this.http.get("assets/jsonfiles/portfolio.json").map(res=>res.json()); 
    }
}
