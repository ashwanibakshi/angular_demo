import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formBuild:FormBuilder;
  registerForm:any ;

  constructor(private fb:FormBuilder) { 
      this.formBuild = fb;
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(7)]]
    })
  }

}
