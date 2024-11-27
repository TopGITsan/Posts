import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Post } from '../../../graphQL/types/posts-page.type';
import { PortalDirective } from '../../../shared/directives/portal.directive';
import { ScrollIntoViewDirective } from '../../../shared/directives/scroll-into-view.directive';
import { PostComponent } from '../post/post.component';
import { PostsPageFacadeService } from '../posts-store/posts-page-facade.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-posts-list',
  standalone: true,
  imports: [AsyncPipe, PostComponent, ScrollIntoViewDirective, PortalDirective],
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
    return post.id ?? index + 98888888;
  }

  onScrollIntoView() {
    console.log(
      '>>>>>>>>>>>>>>>>>> scroll into view last element, should load more elements'
    );
  }
}
