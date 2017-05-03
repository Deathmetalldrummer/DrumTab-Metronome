import { Component, ViewChild, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
	title = 'Editor';
	constructor(private appService: AppService) {}

	lineChange(e) {
		this.appService.setData({x: +e.target.value})
	}
	columnChange(e) {
		this.appService.setData({x: +e.target.value, y: true})
	}
	ngOnInit() {
	}
}
