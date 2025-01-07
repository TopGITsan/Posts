import { Directive, input, effect, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[patchFormGroupValues]',
  standalone: true,
})
export class PatchFormGroupValuesDirective {
  @Input({ required: true }) formGroup: FormGroup<any> | undefined;
  patchFormGroupValues = input<any>();

  patchFormGroupValuesEffect = effect(() => {
    const values = this.patchFormGroupValues();
    if (!values) {
      return;
    }
    this.formGroup?.patchValue(values, { emitEvent: false });
  });
}
