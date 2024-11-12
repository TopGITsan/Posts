import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Post } from '../../../graphQL/types/posts-page.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-post',
  standalone: true,
  imports: [],
  template: `
    @if (loading()) {
      <li>
        <div class="post">
          <span class="post-title"> '--------- --Loading-- ----'</span>
          <span class="post-description"
            >---------- ----- ----- ---- --- Loading ------ ---------
            ------'</span
          >
        </div>
      </li>
    } @else if (post()) {
      <li
        class="post cursor-pointer"
        (click)="onClickPost(post()?.id)">
        <div class="post">
          <span class="post-title">{{ post()?.title }}</span>
          <span class="post-description">{{ post()?.body }}</span>
        </div>
      </li>
    } @else {
      <li>No posts</li>
    }
  `,
  styles: `
    li {
      @apply border border-solid border-b-white p-3 shadow;
    }

    .post {
      @apply flex flex-col p-3;
    }

    .post-title {
      @apply pb-3 text-lg font-bold;
    }

    .post-description {
      @apply text-sm;
    }
  `,
})
export class PostComponent {
  post = input<Post | null>();
  loading = input<boolean | null>();
  changeSelectPost = output<string>();

  onClickPost(postId: string | undefined) {
    if (!postId) {
      return;
    }

    this.changeSelectPost.emit(postId);
  }
}
