import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder,FormGroup,NgForm,Validators} from "@angular/forms";
import { throwError } from 'rxjs';
import {DataService} from "../data.service";
import { User } from '../user';

interface demoo {
  data:[],
  msg:String
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formBuild:FormBuilder;
  registerForm:any ;
  dataService:any;

  constructor(private fb:FormBuilder,private dService:DataService) { 
      this.formBuild = fb;
      this.dataService = dService;
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(7)]]
    })
  }
    
  get f() {return this.registerForm.controls}

  submit(){
    console.log(this.registerForm.value.name,this.registerForm.value.email,this.registerForm.value.password)
    let dataa ={
      name : this.registerForm.value.name,
     email : this.registerForm.value.email,
  password : this.registerForm.value.password
    }
     this.dService.registerUser(dataa).subscribe((dta)=>{
           
          console.log(dta);
         
              if(dta.msg==="success"){
                console.log("user is register")
                this.registerForm.value.name = "",
                this.registerForm.value.email = "",
                this.registerForm.value.password = ""
              }
              else{
                console.log(dta.error);
              }
            
          
       
     },error=>{
           console.log(throwError);
      });
  }
}
 