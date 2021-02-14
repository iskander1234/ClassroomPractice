import { Component } from '@angular/core';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
})
export class AddRecordComponent{

  addDate = '';
  addDistance = '';
  addTime = '';

  adds: [{ date: string; distance: string,  time: string}] = [{
    date: '2018-04-11',
    distance: '5,000.00',
    time: '42:40',
  },
  ];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  addAdd(){
    this.adds.push({
      date: this.addDate,
      distance: this.addDistance,
      time: this.addTime
    });
    this.addDate = '';
    this.addDistance = '';
    this.addTime = '';
  }
}
