import {Injectable} from '@angular/core';
import {AppService} from '../app.service';
import {Data} from '../data';

@Injectable()
export class EditorService {
  patternObject;

  constructor(private appService: AppService) {}

  initPatternObject(id): void {
    this.patternObject = this.appService.dataPattern[id] || new Data();
    this.patternObject.id = id ? id : 0;
  }

  clearPatternObject(id): void {
    this.patternObject = new Data();
    this.patternObject.id = id ? id : 0;
  }

  setName(val): void {
    this.patternObject.name = val.length ? val : 'No-name';
  }

  setLineGrid(line: number): void {
    const pattern: number[][] = this.patternObject.pattern;
    const patternLength: number = pattern.length;
    if (line < patternLength) {
      pattern.splice(line, (patternLength - line));
    } else {
      const patternChildLength: number = pattern[0] ? pattern[0].length : 0;
      for (let i = 0; i < (line - patternLength); i++) {
        pattern.push([]);
        this.patternObject.drumset.push('snare');
        for (let j = 0; j < patternChildLength; j++) {
          pattern[patternLength - 1].push(0);
        }
      }
    }
  }// end setLineGrid

  setColumnGrid(column: number): void {
    const pattern: number[][] = this.patternObject.pattern;
    const patternChildLength: number = pattern[0].length;
    for (let i = 0; i < pattern.length; i++) {
      if (column < patternChildLength) {
        pattern[i].splice(column, (patternChildLength - column));
      } else {
        for (let j = 0; j < (column - patternChildLength); j++) {
          pattern[i].push(0);
        }
      }
    }
  }// end setColumnGrid

  setDrumset(val, drumId): void {
    if (val) {
      this.patternObject.drumset[drumId] = val;
    }
  }

  setChecked(val, status): void {
    const check = this.patternObject.checked;
    if (status) {
      check.push(val);
    } else {
      check.splice(check.indexOf(val), 1);
    }
  }// end patternCheck

  writeChecked() {
    for (let i = 0; i < this.patternObject.checked.length; i++) {
      const [lines, columns] = this.patternObject.checked[i].split(',');
      this.patternObject.pattern[+lines][+columns] = 1;
    }
  }

  writeDataPattern(id): void {
    if (this.appService.dataPattern[id]) {
      this.appService.dataPattern[id] = this.patternObject;
    } else if (this.patternObject.name.length) {
      this.appService.dataPattern.push(this.patternObject);
    }
    this.appService.writeData();
  }

}
