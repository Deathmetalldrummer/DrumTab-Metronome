import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
	data: Array<Array<number>> = [];
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
		}
	}
}
