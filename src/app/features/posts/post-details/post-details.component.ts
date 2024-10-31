import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { defer, map, Observable, withLatestFrom } from 'rxjs';
import { PostsPageFacadeService } from '../posts-store/posts-page-facade.service';
import { Post } from '../../../graphQL/types/posts-page.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, JsonPipe],
  selector: 'app-post-details',
  standalone: true,
  styleUrl: './post-details.component.scss',
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent {
  #postsPageFacade = inject(PostsPageFacadeService);

  post$: Observable<Post | null> = this.#postsPageFacade
    .getSelectedPostId()
    .pipe(
      withLatestFrom(defer(() => this.#postsPageFacade.getPosts())),
      map(([postId, posts]) => {
        if (!postId) {
          return null;
        }
        const post = posts.filter(post => post.id === postId);
        if (post.length === 1) {
          return post[0];
        }
        return null;
      })
    );
}
