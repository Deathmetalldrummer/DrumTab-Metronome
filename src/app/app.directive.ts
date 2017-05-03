import {Directive, ElementRef} from '@angular/core';
import { AppService } from './app.service';

@Directive({
  selector: '[inp]',
  host: {
    '(change)': 'onChange()'
  }
})
export class ChangeDirective {
	constructor(private element: ElementRef, private appService: AppService) {}
	onChange() {
		let val: string = this.element.nativeElement.value;
		let check: string = this.element.nativeElement.checked;
		this.appService.setChangeData(val);
	}
}
