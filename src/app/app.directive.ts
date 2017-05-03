import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[inp]',
  host: {
    '(change)': 'onChange()'
  }
})
export class ChangeDirective {
	constructor(private element: ElementRef) {}
	onChange() {
	// this.element.nativeElement.value.split(',');
	}
}
