import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators, FormBuilder, FormGroupDirective, EmailValidator} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  form;
  test;

  loginUser;
  

  constructor(private http:HttpClient, fb: FormBuilder, private _router: Router) {  

   }


  ngOnInit() {

      this.user = JSON.parse(localStorage.getItem('currentUser'));

      this.form = new FormGroup({
           email: new FormControl(this.user.email, Validators.required),
           password: new FormControl(this.user.password)   

      });      
     }


  login(email, password){

    this.http.post('https://murmuring-citadel-38615.herokuapp.com/users/login', {"email":email, "password":password})
       .subscribe(
         
        (data: any) => { 
           console.log(data);
           this.loginUser = data;
           localStorage.setItem('logedInUser', JSON.stringify({"email":email, "password":password, "token":this.loginUser.token}) )

           this._router.navigate(['/home']);
         },
         err => console.error(err)
      )

      
        
  }

  }




