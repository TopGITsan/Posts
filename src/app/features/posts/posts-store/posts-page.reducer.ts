import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { PostsPageState } from './posts-page.state';
import { postsReducer } from './posts/posts.reducer';
import { postsStateKey } from './posts/posts.state';

export const reducers: ActionReducerMap<PostsPageState> = {
  [postsStateKey]: postsReducer,
};

// intercept each action before dispatching the associated reducer
export const metaReducers: MetaReducer<PostsPageState>[] = isDevMode()
  ? []
  : [];
