import { Directive, ElementRef, inject } from '@angular/core';
/**
 * we just pick any element that has an id property
 * set its value unto the new attribute data-test using Host metadata
 */
@Directive({
  selector: '[id]',
  standalone: true,
  host: {
    '[attr.data-test]': 'dataTest',
  },
})
export class TestingDataAttributeDirective {
  private readonly elRef = inject<ElementRef<HTMLElement> | null>(ElementRef);

  get dataTest(): string {
    return this.elRef?.nativeElement?.id
      ? `data-${this.elRef?.nativeElement.id}`
      : 'no-data';
  }
}
