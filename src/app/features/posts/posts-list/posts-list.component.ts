import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PostsService } from '../../../graphQL/services/posts.service';
import { PostsPageFacadeService } from '../posts-store/posts-page-facade.service';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
})
export class PostsListComponent {
  private readonly postsService = inject(PostsService);

  #postsPageFacade = inject(PostsPageFacadeService);

  posts$ = this.postsService.queryPosts();

  error$ = this.#postsPageFacade.getError();

  loading$ = this.#postsPageFacade.getLoading();
}
