import {Injectable} from '@angular/core';
// import {Data} from './data';

@Injectable()
export class AppService {
  dataPattern: object[] = (localStorage.dataPattern && JSON.parse(localStorage.dataPattern).length) ? JSON.parse(localStorage.dataPattern) : [];

  writeData() {
    localStorage.setItem('dataPattern', JSON.stringify(this.dataPattern));
  }
}
