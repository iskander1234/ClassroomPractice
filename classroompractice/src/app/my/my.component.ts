import { Component } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
})
export class MyComponent{

  date = '';
  distance = '';
  time = '';
  average = '6.00';
  options = 'Edit Delete';

  results: [{data: string, distances: string, times: string, avarages: string, optionss: string}] = [{
    data: 'adsd',
    distances: 'adsd',
    times: '132',
    avarages: 'ads',
    optionss: 'sfdf'
  }];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  addRecord(){
    this.results.push({
      avarages: this.average,
      distances: this.distance,
      optionss: this.options,
      times: this.time,
      data: this.date
    });
  }
}
