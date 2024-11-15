import { Directive, ElementRef, inject, output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
  host: {
    '(window:click)': 'handleClickOutside($event)',
  },
})
export class ClickOutsideDirective {
  private readonly elRef: ElementRef<HTMLElement> = inject(ElementRef);

  appClickOutside = output();
  handleClickOutside(event: MouseEvent) {
    if (!event) {
      return;
    }
    const target = event.target as HTMLElement | null;

    if (target && !this.elRef.nativeElement.contains(target)) {
      this.appClickOutside.emit();
    }
  }
}
