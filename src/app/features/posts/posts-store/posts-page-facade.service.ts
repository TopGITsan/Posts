import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../../graphQL/types/posts-page.type';
import { PostsPageState } from './posts-page.state';
import {
  errorSelector,
  loadingSelector,
  postsSelector,
  selectedPostIdSelector,
} from './posts/posts.selector';

@Injectable({ providedIn: 'root' })
export class PostsPageFacadeService {
  #postsPageStore: Store<PostsPageState> = inject(Store);

  getPosts(): Observable<Post[]> {
    return this.#postsPageStore.select(postsSelector);
  }

  getLoading(): Observable<boolean> {
    return this.#postsPageStore.select(loadingSelector);
  }

  getError(): Observable<string | null> {
    return this.#postsPageStore.select(errorSelector);
  }

  getSelectedPostId(): Observable<string | null> {
    return this.#postsPageStore.select(selectedPostIdSelector);
  }
}
