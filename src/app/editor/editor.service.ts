import {Injectable} from '@angular/core';
import {AppService} from '../app.service';
import {Data} from '../data';

@Injectable()
export class EditorService {
  dataObject;
  constructor(private appService: AppService) {
  }

  addDataObject(id): void {
    this.dataObject = this.appService.dataPattern[id] || new Data();
    this.dataObject.id = id ? id : 0;
  }

  clearDataObject(): void {
    this.dataObject = new Data();
  }

  addDataPattern(id): void {
    if (this.appService.dataPattern[id]) {
      this.appService.dataPattern[id] = this.dataObject;
    } else {
      this.appService.dataPattern.push(this.dataObject);
    }
    this.appService.writeData();
  }

  setName(val): void {
      this.dataObject.name = val.length ? val : 'No-name';
  }

  setLineGrid(line: number): void {
    const patternLength: number = this.dataObject.pattern.length;
    if (line < patternLength) {
      this.dataObject.pattern.splice(line, (patternLength - line));
    } else {
      const patternChildLength: number = this.dataObject.pattern[0] ? this.dataObject.pattern[0].length : 0;
      for (let i = 0; i < (line - patternLength); i++) {
        this.dataObject.pattern.push([]);
        this.dataObject.drumset.push('snare');
        for (let j = 0; j < patternChildLength; j++) {
          this.dataObject.pattern[this.dataObject.pattern.length - 1].push(0);
        }
      }
    }
  }// end lineGrid
  setColumnGrid(column: number): void {
    const patternChildLength: number = this.dataObject.pattern[0].length;
    for (let i = 0; i < this.dataObject.pattern.length; i++) {
      if (column < patternChildLength) {
        this.dataObject.pattern[i].splice(column, (patternChildLength - column));
      } else {
        for (let j = 0; j < (column - patternChildLength); j++) {
          this.dataObject.pattern[i].push(0);
        }
      }
    }
  }// end columnGrid

  setDrumset(val, drumId): void {
    if (val) {
      this.dataObject.drumset[drumId] = val;
    }
  }

  patternCheck(val, status): void {
    const [lines, columns] = val.split(',');
    if (status) {
      this.dataObject.pattern[+lines][+columns] = 1;
    } else {
      this.dataObject.pattern[+lines][+columns] = 0;
    }
  }// end setChangePattern

}
