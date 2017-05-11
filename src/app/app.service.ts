import {Injectable} from '@angular/core';
import {Data} from './data';

@Injectable()
export class AppService {
	private dataPattern: Array<object> = (localStorage.dataPattern && JSON.parse(localStorage.dataPattern).length) ? JSON.parse(localStorage.dataPattern) : [];
	set setData(obj) {// ругается если даю тип для obj
		for (let i = 0; i < this.dataPattern.length; i++) {
			console.log(this.dataPattern[i])
			// if (obj.id === this.dataPattern[i].id) {
			// 	this.dataPattern = obj;
			// }
		}
		this.dataPattern.push(obj);
	}
	get getData() {
		return this.dataPattern;
	}
	writeData() {
      localStorage.setItem('dataPattern', JSON.stringify(this.dataPattern));
    }
}
