import { createAction, props } from '@ngrx/store';
import { Post } from '../../../../graphQL/types/posts-page.type';

export const LOAD_POSTS = createAction('[Posts] Load posts');

export const LOAD_POSTS_SUCCESS = createAction(
  '[Posts] Load posts success',
  props<{ posts: Post[] }>()
);
export const LOAD_POSTS_FAILURE = createAction(
  '[Posts] Load posts failure',
  props<{ error: string }>()
);
