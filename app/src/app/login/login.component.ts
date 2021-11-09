import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validator, Validators} from "@angular/forms";
import {DataService} from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  formBuild:FormBuilder;
  loginForm:any;
    
  constructor(private fb:FormBuilder,private dService:DataService) {
       this.formBuild = fb;
   }

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(7)]]
    })
  }
    get f(){return this.loginForm.controls}

   submit(){
     
   }

}
