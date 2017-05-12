import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {EditorService} from './editor.service';

import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {
  title = 'Editor';
  private id: number;
  private lineSelect: number[] = Array.apply(null, {length: 6}).map((value, index) => index + 1);
  private columnSelect: number[] = Array.apply(null, {length: 32}).map((value, index) => index + 1);
  private drumsetSelect: string[] = ['snare', 'bass', 'ride', 'hi-hat1', 'hi-hat2', 'hi-hat3'];
  private routeSubscription: Subscription;
  @ViewChild('nameValue') nameValue: ElementRef;


  constructor(private editorService: EditorService, private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.routeSubscription = this.activateRoute.params.subscribe(params => this.id = params['id']);
    this.editorService.initPatternObject(this.id);
  }

  onSave(): void {
    this.editorService.setName(this.nameValue.nativeElement.value);
    this.editorService.writeDataPattern(this.id);
  }

  onChangeCheck(i: number, j: number, column: number) {
    this.editorService.setChecked(i, j, (1 - column));
  }

  onDrumsetSelect(elem: HTMLSelectElement) {
    this.editorService.setDrumset(elem.value, elem.getAttribute('id'));
  }

  onColumnSelect(elem: HTMLSelectElement) {
    this.editorService.setColumnGrid(+elem.value);
  }

  onLineSelect(elem: HTMLSelectElement) {
    this.editorService.setLineGrid(+elem.value);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
