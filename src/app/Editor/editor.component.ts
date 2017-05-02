import { Component, ViewChild, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  title = 'Editor';
  arr: Array<Array<number>> = [];
  arrLenght: number;
  lineChange(e) {
    this.arr = [];
    for (let i = 0; i < +e.target.value; i++) {
      this.arr.push([]);
    }
  }
  columnChange(e) {
    this.arrLenght = this.arr.length || 1;
    for (let i = 0; i < this.arrLenght; i++) {
      this.arr[i] = [];
      for (let j = 0; j < +e.target.value; j++) {
        this.arr[i].push(0);
      }
    }
    console.log(this.arr);
  }


  ngOnInit() {
  }

}
