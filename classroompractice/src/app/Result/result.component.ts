import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
})
export class ResultComponent{

  // addDate = '';
  // addDistance = '';
  // addTime = '';

 @Input() resultItem!: {date: string, distance: string, time: string};

}
