import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  user;
  showlogin;
  showlogout;

  constructor() { }

  

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('logedInUser'));
    console.log(this.user);

    if(this.user === null)
    {
       this.showlogin = true;
       this.showlogout = false;
    }
    else{
       this.showlogin = false;
       this.showlogout = true;
    }

  }

  logout(){

    localStorage.removeItem('logedInUser');
  }

}
