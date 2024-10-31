import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PostsPageFacadeService } from '../posts-store/posts-page-facade.service';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
})
export class PostsListComponent {
  #postsPageFacade = inject(PostsPageFacadeService);

  posts$ = this.#postsPageFacade.getPosts();

  error$ = this.#postsPageFacade.getError();

  loading$ = this.#postsPageFacade.getLoading();
}
