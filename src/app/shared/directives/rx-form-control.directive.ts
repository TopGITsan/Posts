import { Directive, inject, Injector, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  NgControl,
} from '@angular/forms';

@Directive({
  selector: 'input[formControlName], textarea[formControlName]',
  standalone: true,
  exportAs: 'control',
  host: {
    '[class.shadow-red-600]': 'showShadow',
    '(input)': 'onInput()',
    '(blur)': 'onBlur()',
  },
})
export class RxFormControlDirective implements OnInit {
  private readonly injector = inject(Injector);

  control: FormControl | undefined;
  showShadow = false;

  ngOnInit(): void {
    const ngControl = this.injector.get(NgControl, null, {
      self: true,
      optional: true,
    });
    console.log('control ', ngControl?.name)
    if (ngControl instanceof FormControlDirective) {
      this.control = ngControl.control;
    } else if (ngControl instanceof FormControlName) {
      const container = this.injector.get(ControlContainer)
        .control as FormGroup;
      if (!ngControl.name) {
        return;
      }
      this.control = container.controls[ngControl.name] as FormControl;
    }
  }

  private onInput(): void {
    this.onShowShadow();
  }

  private onBlur(): void {
    this.onShowShadow();
  }

  private onShowShadow() {
    if (!this.control) {
      return;
    }
    this.showShadow =
      this.control.invalid && (this.control.dirty || this.control.touched);
  }
}
