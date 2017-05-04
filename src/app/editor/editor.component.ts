import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  title = 'Editor';
  @ViewChild('valu') valu: ElementRef;

  constructor(private appService: AppService) {
  }

  lineChange(e) {
    this.appService.setPattern({x: +e.target.value});
  }

  columnChange(e) {
    this.appService.setPattern({x: +e.target.value, checked: true});
  }
  localWrite() {
    console.log(this.valu.nativeElement.value);
    this.appService.patternTpl = this.appService.pattern;
    localStorage.setItem('pattern', JSON.stringify(this.appService.pattern));
    localStorage.setItem('drumset', JSON.stringify(this.appService.drumset));
  }
  localClear() {
    localStorage.clear();
    this.appService.patternTpl = [];
    this.appService.pattern = [];
    this.appService.drumset = [];
  }
  ngOnInit() {
  }
}
