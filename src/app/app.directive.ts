import {Directive, ElementRef, HostListener} from '@angular/core';
import {AppService} from './app.service';

@Directive({
  selector: '[inp]'
})
export class ChangeDirective {
  constructor(private element: ElementRef, private appService: AppService) {
  }
@HostListener('change') onChange() {
    if (this.element.nativeElement.tagName === 'SELECT') {
      const val: string = this.element.nativeElement.value;
      const dataId = +this.element.nativeElement.getAttribute('id');
      this.appService.setDrumset(val, dataId);
    }
    if (this.element.nativeElement.tagName === 'INPUT') {
      const val: string = this.element.nativeElement.value;
      const check: string = this.element.nativeElement.checked;
      this.appService.setChangePattern(val, check);
    }
  }
}
