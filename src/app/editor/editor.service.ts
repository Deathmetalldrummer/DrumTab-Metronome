import {Injectable} from '@angular/core';
import {AppService} from '../app.service';
import {Data} from '../data';

@Injectable()
export class EditorService {
  private dataObject;
  constructor(private appService: AppService) { }

  Id(id) {
      this.dataObject = this.appService.getData[id] || new Data();
  }

  get getDataObject() {
    return this.dataObject;
  }

  setName(val) {
    this.dataObject.name = val;
	this.dataObject.id = this.appService.getData.length;
  }


  setLineGrid(line: number) {
    const patternLength: number = this.dataObject.pattern.length;
    if (line < patternLength) {
      this.dataObject.pattern.splice(line, (patternLength - line));
    } else {
      for (let i = 0; i < (line - patternLength); i++) {
        this.dataObject.pattern.push([]);
        // this.data.drumset.push('');
      }
    }
  }// end lineGrid
  setColumnGrid(column: number) {
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

  setDrumset(val, drumId) {
    if (val) {
      this.dataObject.drumset[drumId] = val;
    }
  }

  patternCheck(val, status) {
    const [lines, columns] = val.split(',');
    //patternTpl nолько тут
    if (status) {
      this.dataObject.pattern[+lines][+columns] = 1;
    } else {
      this.dataObject.pattern[+lines][+columns] = 0;
    }
  }// end setChangePattern

}
