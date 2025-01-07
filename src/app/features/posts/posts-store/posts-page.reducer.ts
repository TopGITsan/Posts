import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { createPostReducer } from '../create-post/store/create-post.reducer';
import { PostsPageState } from './posts-page.state';
import { postsReducer } from './posts/posts.reducer';
import { postsStateKey } from './posts/posts.state';
import { createPostStateKey } from '../create-post/store/create-post.state';

export const reducers: ActionReducerMap<PostsPageState> = {
  [postsStateKey]: postsReducer,
  [createPostStateKey]: createPostReducer,
};

// intercept each action before dispatching the associated reducer
export const metaReducers: MetaReducer<PostsPageState>[] = isDevMode()
  ? []
  : [];
