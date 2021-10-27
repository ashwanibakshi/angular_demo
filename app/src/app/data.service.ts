import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService:HttpClient) {
     
   }
   demo(){
     return this.httpService.get("http://localhost:3000/api/v1/demo");
   }
}
