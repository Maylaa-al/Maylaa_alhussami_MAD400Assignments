import { Component } from '@angular/core';
import { ContentList } from './models/content-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private _contentList:ContentList){

  }
  title = 'M_Alhussami_BettaFish';



   
}
