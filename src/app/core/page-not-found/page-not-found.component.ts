import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <p>page-not-found!</p>
    <ul class="list-none">
      <li
        [routerLink]="['/']"
        class="cursor-pointer text-purple-600 hover:underline">
        Go to Home
      </li>
    </ul>
  `,
  styles: ``,
})
export class PageNotFoundComponent {}
