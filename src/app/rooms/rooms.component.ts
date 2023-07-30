import { Component, OnInit } from '@angular/core';

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


  ngOnInit(): void {}

  toggleButton() {
    this.toogleRooms = !this.toogleRooms;
    console.log(this.toogleRooms)
  }
}
