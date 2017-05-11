import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {EditorService} from './editor.service';
import {AppService} from '../app.service';

import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {
  title = 'Editor';
  private routeSubscription: Subscription;
  @ViewChild('nameValue') nameValue: ElementRef;

  constructor(private editorService: EditorService, private appService: AppService, private activateRoute: ActivatedRoute) {
    this.routeSubscription = activateRoute.params.subscribe(params => this.editorService.Id(params['id']));
  }
  submitOk() {
    this.editorService.setName(this.nameValue.nativeElement.value);
    this.appService.setData = this.editorService.getDataObject;
    this.appService.writeData();
    console.log(localStorage)
  }
  submitClear() {
    localStorage.clear();
    console.log(localStorage)
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
