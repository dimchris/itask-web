import { Component, OnInit, SkipSelf } from '@angular/core';

@Component({
  selector: 'app-make-game',
  templateUrl: './make-game.component.html',
  styleUrls: ['./make-game.component.css']
})
export class MakeGameComponent implements OnInit {


  cards;
  name;
  
  constructor() { }


  ngOnInit() {

    this.cards=[
      {name: '', description: '' }
    ]
  }


  add(){
      this.cards.push({name:'', description:''});
  }


  put_values(name, description, counter){

    for(var i=0; i<this.cards.length; i++)
    {
        if(i == counter)
        {   
           this.cards[i] = {"name": name, "description": description}
        }
    }
     

  }


  
  delete(counter){
    for(var i=0; i<this.cards.length; i++)
    {
        if(i == counter)
        {
           if(this.cards.length > 1){
           this.cards.splice(i,1);
           break;
           }
        }
    }
  }


 



 



}
