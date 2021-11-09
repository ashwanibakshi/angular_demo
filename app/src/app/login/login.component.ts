import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validator, Validators} from "@angular/forms";
import { throwError } from 'rxjs';
import {DataService} from "../data.service";
import { User } from '../user';

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
       let dataa:User={
          name : "",
         email : this.loginForm.value.email,
      password : this.loginForm.value.password
       }
       this.dService.loginUser(dataa).subscribe((data)=>{
            if(data.data!==undefined && data.data!==null){
               console.log(data.data);
            }
            else{
              console.log(data.error);
            }
          this.loginForm.reset()
       },error=>{
            console.log(throwError);
       });
   }

}
