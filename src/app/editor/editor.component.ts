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
  private id: number;
  private routeSubscription: Subscription;
  private lineSelect: number[] = Array.apply(null, {length: 6}).map((value, index) => index + 1);
  private columnSelect: number[] = Array.apply(null, {length: 32}).map((value, index) => index + 1);
  private drumsetSelect: string[] = ['snare', 'bass', 'ride', 'hi-hat1', 'hi-hat2', 'hi-hat3'];
  @ViewChild('nameValue') nameValue: ElementRef;

  constructor(private editorService: EditorService, private activateRoute: ActivatedRoute, private appService: AppService) {
  }
  submitOk(): void {
    this.editorService.setName(this.nameValue.nativeElement.value);
    this.editorService.addDataPattern(this.id);
    console.log(localStorage);
  }
  submitClear(): void {
    localStorage.clear();
    this.editorService.clearDataObject();
    console.log(localStorage);
  }
  ngOnInit() {
    this.routeSubscription = this.activateRoute.params.subscribe(params => this.id = params['id']);
    this.editorService.addDataObject(this.id);
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.editorService.clearDataObject();
  }
}
