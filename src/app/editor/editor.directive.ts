import {Directive, ElementRef, HostListener} from '@angular/core';
import {EditorService} from './editor.service';

@Directive({
  selector: '[appChange]'
})
export class EditorDirective {
  constructor(private element: ElementRef, private editorService: EditorService) {
  }
@HostListener('change') onChange() {
	const elem = this.element.nativeElement;
    if (elem.name === 'lineSelect') {
      this.editorService.setLineGrid(+elem.value);
    }
    if (elem.name === 'columnSelect') {
		this.editorService.setColumnGrid(+elem.value);
    }
	if (elem.name === 'drumsetSelect') {
   this.editorService.setDrumset(elem.value, elem.getAttribute('id'));
	}
	if (elem.name === 'patternCheck') {
   this.editorService.patternCheck(elem.value, elem.checked);
	}
  }
}
