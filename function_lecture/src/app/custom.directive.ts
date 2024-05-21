import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color="skyblue"
    el.nativeElement.style.fontSize="50px"
  }

}
