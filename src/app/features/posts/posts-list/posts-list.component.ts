import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { PostsPageFacadeService } from '../posts-store/posts-page-facade.service';
import { Post } from '../../../graphQL/types/posts-page.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-posts-list',
  standalone: true,
  imports: [AsyncPipe, PostComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
})
export class PostsListComponent {
  #postsPageFacade = inject(PostsPageFacadeService);

  posts$ = this.#postsPageFacade.getPosts();

  error$ = this.#postsPageFacade.getError();

  loading$ = this.#postsPageFacade.getLoading();

  handleSelectPost(postId: string) {
    if (!postId) {
      return;
    }

    this.#postsPageFacade.onSelectPostId(postId);
  }

  trackPostFn(index: number, post: Post) {
    return (post.id ?? (index + 98888888));
  }
}
