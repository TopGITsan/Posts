import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appFocus]',
  standalone: true,
})
export class FocusDirective {
  appFocus = input<boolean>(false);
  elementRef: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);

  focusEffect = effect(() => {
    if (!this.elementRef.nativeElement || !this.appFocus()) {
      return;
    }
    this.elementRef.nativeElement.focus();
  });
}
