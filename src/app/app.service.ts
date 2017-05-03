import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
	data: Array<Array<number>> = [];
	public getData() {
		return this.data;
	}
	public setData(obj) {
		if (!obj.y) {
			this.data = [];
			for (let i = 0; i < obj.x; i++) {
				this.data.push([]);
			}
		} else {
			let arrLenght = this.data.length || 1;
			for (let i = 0; i < arrLenght; i++) {
				this.data[i] = [];
				for (let j = 0; j < obj.x; j++) {
					this.data[i].push(0);
				}
			}
		}// end if else
	}// end setData
	public setChangeData(val) {
		let [line, column] = val.split(',');
		for(let i = 0; i <= line; i++) {
			for(let j = 0; j <= column; j++) {
				this.data[i][j] = 1;
			}
		}// end for
	}
}
