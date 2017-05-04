import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
  // Матрица нотного стана
  patternTpl: Array<Array<number>> = (localStorage.pattern && JSON.parse(localStorage.pattern).length) ? JSON.parse(localStorage.pattern) : [];
  // матрица чекбоксов
  pattern: Array<Array<number>> = (localStorage.pattern && JSON.parse(localStorage.pattern).length) ? JSON.parse(localStorage.pattern) : [];

  drumset: Array<string> = (localStorage.drumset && JSON.parse(localStorage.drumset).length) ? JSON.parse(localStorage.drumset) : [];

  setPattern(obj) {
    if (!obj.checked) {
      this.patternTpl = [];
      this.pattern = [];
      this.drumset = [];
      for (let i = 0; i < obj.x; i++) {
        this.patternTpl.push([]);
        this.pattern.push([]);
        this.drumset.push('');
      }
    } else {
      for (let i = 0; i < this.patternTpl.length; i++) {
        this.patternTpl[i] = [];
        this.pattern[i] = [];
        for (let j = 0; j < obj.x; j++) {
            this.patternTpl[i].push(0);
            this.pattern[i].push(0);
        }
      }
    }// end if else
  }// end setPattern
  setChangePattern(val, status) {
    const [lines, columns] = val.split(',');
    if (status) {
      this.pattern[+lines][+columns] = 1;
    } else {
      this.pattern[+lines][+columns] = 0;
    }
  }// end setChangePattern

  setDrumset(val, dataId) {
      this.drumset[dataId] = val;
  }
}


