import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[autoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }

})

export class AutogrowDirective {
  
  constructor(private ele:ElementRef, private ren:Renderer) {
   this.ele;
   this.ren;
  }

  onFocus() {
    this.ren.setElementStyle(this.ele.nativeElement, 'width', '400');
   
  };

  onBlur() {
    this.ren.setElementStyle(this.ele.nativeElement, 'width', '230');
  };


}//AutogrowDirective class