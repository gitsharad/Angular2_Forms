import { Injectable } from "@angular/core";
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class SkillsService {
   
  constructor(private http:Http) { }
    getSkills(){
      return this.http.get("assets/jsonfiles/skill.json").map(res=>res.json());  
    }

}