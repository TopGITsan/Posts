import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClickOutsideDirective } from '../../shared/directives/click-outside.directive';
import { HasPermissionDirective } from '../../shared/directives/has-permission.directive';
import { PasswordStrengthDirective } from '../../shared/directives/password-strength/password-strength.directive';
import { FocusDirective } from '../../shared/directives/focus.directive';

interface RegisterForm {
  username: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PasswordStrengthDirective,
    ClickOutsideDirective,
    HasPermissionDirective,
    RouterLink,
    FocusDirective,
  ],
  template: `
    <form
      (appClickOutside)="onOutsideClick()"
      [formGroup]="registerForm"
      (ngSubmit)="onSubmit()"
      class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <h2 class="mb-4 text-2xl font-bold">Register Form</h2>
      <div>
        <label
          for="username"
          class="mb-2 block text-sm font-bold text-gray-700"
          >Username:</label
        >
        <input
          type="text"
          id="username"
          [appFocus]="true"
          formControlName="username"
          placeholder="Enter Username"
          class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" />
      </div>

      <div>
        <label
          for="password"
          class="mb-2 block text-sm font-bold text-gray-700"
          >Password:</label
        >
        <input
          #evaluator="passwordStrength"
          type="password"
          id="password"
          formControlName="password"
          placeholder="Enter Password"
          class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" />
      </div>
      @switch (evaluator.strength) {
        @case ('weak') {
          <p>Weak password</p>
        }
        @case ('medium') {
          <p>Medium password</p>
        }
        @case ('strong') {
          <p>Strong password</p>
        }
      }

      <button
        *appHasPermissionIf="'clown'; else hasPermissionElse"
        type="submit"
        [disabled]="registerForm.invalid"
        class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white focus:outline-none disabled:bg-gray-400 disabled:hover:bg-gray-400">
        Register
      </button>
    </form>
    <ng-template #hasPermissionElse>
      <button
        routerLink="/"
        type="button"
        class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white focus:outline-none disabled:bg-gray-400 disabled:hover:bg-gray-400">
        Go Home
      </button>
    </ng-template>
  `,
  styles: ``,
})
export class RegisterComponent {
  #fb = inject(NonNullableFormBuilder);

  registerForm: FormGroup = this.#fb.group<RegisterForm>({
    username: this.#fb.control('', [Validators.required]),
    password: this.#fb.control('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.registerForm.value);
  }

  onOutsideClick() {
    console.log('>>>>>>>>>>>>>> clicked outside of the form');
  }
}
