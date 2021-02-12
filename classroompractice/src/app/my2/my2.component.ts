import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-my2',
  templateUrl: './my2.component.html',
})
export class My2Component{

  // tslint:disable-next-line:no-input-rename
   @Input('my2Item') my2 !: { date: string, distance: string, time: string, average: string, options: string, };

   private my2Item = false;

}
