import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {DataService} from "../data.service";

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
     this.dService.demo().subscribe((data)=>{
       console.log(data);
     })
  }

}
