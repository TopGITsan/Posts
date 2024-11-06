import { Directive, inject, input } from '@angular/core';
import { PasswordStrength } from './password-strenght.type';
import { EVALUATOR_FN_TOKEN } from './password-strength.token';
import { defaultEvaluatorFn } from './default-password-evaluator';

@Directive({
  selector: 'input[type="password"]',
  standalone: true,
  exportAs: 'passwordStrength',
  host: {
    '(input)': 'onInput($event)',
  },
})
export class PasswordStrengthDirective {
  noStrengthCheck = input<boolean>(false);
  // private readonly el = inject(ElementRef);
  strength: PasswordStrength = 'no';
  // no need for ElementRef anymore

  evaluatorFn =
    inject(EVALUATOR_FN_TOKEN, { optional: true }) ?? defaultEvaluatorFn;

  // add or remove css classes based on evaluated password
  // onInput(event: InputEvent): void {
  //   if (this.noStrengthCheck()) {
  //     return;
  //   }
  //   const input = event.target as HTMLInputElement;
  //   const value = input.value;
  //   const strength = this.evaluatePasswordStrength(value);
  //   console.log(' input event : ', { event, strength });
  //   for (let i = this.el.nativeElement.classList.length - 1; i >= 0; i--) {
  //     const className = this.el.nativeElement.classList[i];
  //     if (className.startsWith('password-strength-')) {
  //       this.el.nativeElement.classList.remove(className);
  //     }
  //   }
  //   this.el.nativeElement.classList.add(`password-strength-${strength}`);
  // }
  onInput(event: InputEvent): void {
    if (this.noStrengthCheck()) {
      return;
    }
    const input = event.target as HTMLInputElement;
    const value = input.value;

    this.strength = this.evaluatorFn(value);
    console.log(' input event : ', { event, strength: this.strength });
  }
}
