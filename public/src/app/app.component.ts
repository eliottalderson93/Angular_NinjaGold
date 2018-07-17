import { Component } from '@angular/core';
import { HttpService } from './http.service';
var Player = require('../../../server/models');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja Gold';
  gold: Number = 0;
  logs : String[] = [];
  constructor (private _httpService:HttpService){

  }
  updateGold(location: string){
    var eventString = "At the ";
    var goldMin = 2;
    var goldMax = 5;
    if(location === 'casino'){
      goldMin = -100;
      goldMax = 100;
    }
    else if(location === 'cave'){
      goldMin = 5;
      goldMax = 10;
    }
    else if (location === 'house'){
      goldMin = 7;
      goldMax = 15;
    }
    else{ //location == farm
      //default values
    }
    eventString += location;
    eventString += " you earned ";
    var goldCalc = getRandomInt(goldMin,goldMax);
    eventString += goldCalc.toString();
    eventString += " gold."
    this.gold += goldCalc;
    this.logs.push(eventString);
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}
