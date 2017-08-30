import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()

export class WorkExperience {
    constructor(private http:Http){}
    getWoekExp(){
         return this.http.get('assets/jsonfiles/workexp.json').map(res=>res.json()); 
    }
}