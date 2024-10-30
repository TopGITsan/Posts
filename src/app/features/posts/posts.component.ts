import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  selector: 'app-posts',
  standalone: true,
  styles: ``,
  templateUrl: './posts.component.html',
})
export class PostsComponent {}
