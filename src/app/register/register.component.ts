import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { error } from 'protractor';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})




export class RegisterComponent implements OnInit {

  router;



  constructor(private http:HttpClient, private _activatedRoute: ActivatedRoute, private _router: Router) { 

  }


  ngOnInit() {

  }


  signup(firstname, lastname, email, password){

    var fullname = firstname + " " + lastname;
    var flag = 0;

    this.http.post('https://murmuring-citadel-38615.herokuapp.com/users', {"email":email, "fullname":fullname, "password":password})
       .subscribe(
         
        () => { 
          localStorage.setItem('currentUser', JSON.stringify({"email":email, "fullname":fullname, "password":password}) )
          this._router.navigate(['/login']);
         },
         err => console.error(err)
      )
      
  }

}
