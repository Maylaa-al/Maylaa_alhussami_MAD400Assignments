import { Component } from '@angular/core';
import { IContent } from '../icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  bettasArray: IContent[];

  constructor() {
    this.bettasArray = [] 
  }
}
