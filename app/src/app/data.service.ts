import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService:HttpClient) {}

  //header
    header = new HttpHeaders();

   demo(){
     return this.httpService.get("http://localhost:3000/api/v1/demo");
   }

   registerUser(){
     this.header.append('Content-Type','application/json');
     return this.httpService.post("http://localhost:3000/api/v1/register",{Headers:this.header});
   }
}
