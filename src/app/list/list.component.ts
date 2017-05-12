import {Component} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  title = 'List';

  constructor(private appService: AppService) {}
  clearList() {
    this.appService.dataPattern = [];
    localStorage.clear();
  }
}
