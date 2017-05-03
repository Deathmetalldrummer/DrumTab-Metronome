import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
  dataTpl: Array<Array<number>> = (localStorage.data && JSON.parse(localStorage.data).length) ? JSON.parse(localStorage.data) : [];
  data: Array<Array<number>> = (localStorage.data && JSON.parse(localStorage.data).length) ? JSON.parse(localStorage.data) : [];
  public setData(obj) {
    if (!obj.y) {
      this.dataTpl = [];
      this.data = [];
      for (let i = 0; i < obj.x; i++) {
        this.dataTpl.push([]);
        this.data.push([]);
      }
    } else {
      for (let i = 0; i < this.dataTpl.length; i++) {
        this.dataTpl[i] = [];
        this.data[i] = [];
        for (let j = 0; j < obj.x; j++) {
            this.dataTpl[i].push(0);
            this.data[i].push(0);
        }
      }
    }// end if else
  }// end setData
  public setChangeData(val, status) {
    const [lines, columns] = val.split(',');
    this.data[+lines][+columns] = 1;
    console.log(this.data);
  }
}


