import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[inp]',
  host: {
    '(change)': 'onChange()'
  }
})
export class ChangeDirective {
  xx: any;
  constructor(private element: ElementRef) {}
  onChange() {
    // this.element.nativeElement.value.split(',');
    this.xx.push('aaaa')
    console.log(this.xx);
  }
}
