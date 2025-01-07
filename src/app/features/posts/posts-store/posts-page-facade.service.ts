import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../../graphQL/types/posts-page.type';
import { PostsPageState } from './posts-page.state';
import {
  LOAD_POSTS,
  SAVE_POST,
  SELECT_POST_ID,
  UNSELECT_POST_ID,
} from './posts/posts.actions';
import {
  errorSelector,
  loadingSelector,
  postsSelector,
  selectedPostIdSelector,
} from './posts/posts.selector';
import { CreatePost } from '../create-post/store/create-post.state';
import { formValueChange } from '../create-post/store/create-post.actions';
import { createPostStateSelector } from '../create-post/store/create-post.selector';

@Injectable({ providedIn: 'root' })
export class PostsPageFacadeService {
  private readonly postsPageStore: Store<PostsPageState> = inject(Store);

  getPosts(): Observable<Post[]> {
    return this.postsPageStore.select(postsSelector);
  }

  getLoading(): Observable<boolean> {
    return this.postsPageStore.select(loadingSelector);
  }

  getError(): Observable<string | null> {
    return this.postsPageStore.select(errorSelector);
  }

  getSelectedPostId(): Observable<string | null> {
    return this.postsPageStore.select(selectedPostIdSelector);
  }

  getCreatePostFormValue(): Observable<CreatePost> {
    return this.postsPageStore.select(createPostStateSelector);
  }

  onLoadPosts(): void {
    this.postsPageStore.dispatch(LOAD_POSTS());
  }

  onSelectPostId(postId: string): void {
    this.postsPageStore.dispatch(SELECT_POST_ID({ postId }));
  }

  onUnselectPostId(postId: null): void {
    this.postsPageStore.dispatch(UNSELECT_POST_ID({ postId }));
  }

  onSavePost(post: Post): void {
    this.postsPageStore.dispatch(SAVE_POST({ post }));
  }

  onCreatePostValueChanges(value: CreatePost): void {
    this.postsPageStore.dispatch(formValueChange(value));
  }
}
