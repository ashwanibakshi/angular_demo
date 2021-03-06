import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {User} from "./user";

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

   registerUser(data:User){
     this.header.append('Content-Type','application/json');
     return this.httpService.post<any>("http://localhost:3000/api/v1/register",data,{headers:this.header});
   }

   loginUser(data:User){
      this.header.append('Content-Type','application/json');
      return this.httpService.post<any>("http://localhost:3000/api/v1/login",data,{headers:this.header});
   }
}
