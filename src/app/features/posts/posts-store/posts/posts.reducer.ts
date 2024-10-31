import { Action, createReducer, on } from '@ngrx/store';
import {
  LOAD_POSTS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_SUCCESS,
} from './posts.actions';
import { initialPostsState, PostsState } from './posts.state';

const createPostsReducer = createReducer(
  initialPostsState,
  // tap into NgRx actions to mutate the state
  on(LOAD_POSTS, (state, _) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LOAD_POSTS_SUCCESS, (state, { posts }) => ({
    ...state,
    loading: false,
    posts,
  })),
  on(LOAD_POSTS_FAILURE, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function postsReducer(state: PostsState | undefined, action: Action) {
  return createPostsReducer(state, action);
}
