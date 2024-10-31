import { createAction, props } from '@ngrx/store';
import { Post } from '../../../../graphQL/types/posts-page.type';

export const LOAD_POSTS = createAction(
  '[Posts] Load posts',
  props<{ posts: Post[] }>()
);

export const LOAD_POSTS_SUCCESS = createAction(
  '[Post] Load posts success',
  props<{ posts: Post[] }>()
);
export const LOAD_POSTS_FAILURE = createAction(
  '[Post] Load posts failure',
  props<{ error: string }>()
);
