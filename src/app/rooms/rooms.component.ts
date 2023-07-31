import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  constructor() {}

  hotelName = 'Pooja Hotel';

  noOfRooms = 10;

  toogleRooms = true;

  rooms : Room = {
    totalRoom : 0,
    availableRooms : 10,
    bookedRooms:5
  }


  ngOnInit(): void {}

  toggleButton() {
    this.toogleRooms = !this.toogleRooms;
    console.log(this.toogleRooms)
  }
}
