import { Component } from '@angular/core';
@Component({
selector :"app-property-list",
templateUrl:"./property-list.component.html",
styleUrls:['./property-list.component.css']
})

export class PropertyListComponent{
  properties:any=
  [
    {
    "Id":1,
    "Name":"Sharif House",
    "Type":"House",
    "Price":12000
    },
    {
      "Id":2,
      "Name":"Chaudary",
      "Type":"Room",
      "Price":12000
    },
    {
      "Id":3,
      "Name":"Awari House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id":4,
      "Name":"Upper-portion",
      "Type":"lawn",
      "Price":11000
    },
    {
      "Id":5,
      "Name":" M M House",
      "Type":"Garaj",
      "Price":13500
    },
    {
      "Id":6,
      "Name":"Awais House",
      "Type":"Basement",
      "Price":12000
    },
  ]

}
