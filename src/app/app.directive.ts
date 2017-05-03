import {Directive, ElementRef, HostListener} from '@angular/core';
import {AppService} from './app.service';

@Directive({
  selector: '[inp]'
})
export class ChangeDirective {
  constructor(private element: ElementRef, private appService: AppService) {
  }
@HostListener('change') onChange() {
    const val: string = this.element.nativeElement.value;
    const check: string = this.element.nativeElement.checked;
    this.appService.setChangeData(val, check);
  }
}
