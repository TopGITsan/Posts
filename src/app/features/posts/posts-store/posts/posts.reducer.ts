import { Action, createReducer, on } from '@ngrx/store';
import {
  LOAD_POSTS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_SUCCESS,
  SAVE_POST,
  SELECT_POST_ID,
  UNSELECT_POST_ID,
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
  })),
  on(SELECT_POST_ID, UNSELECT_POST_ID, (state, { postId }) => ({
    ...state,
    selectedPostId: postId,
  })),
  on(SAVE_POST, (state, { post }) => {
    const postsCount = state.posts.length;

    return {
      ...state,
      loading: false,
      posts: [
        {
          ...post,
          id: String(postsCount + 1),
          user: { ...post.user, id: String(postsCount + 1) },
        },
        ...state.posts,
      ],
    };
  })
);

export function postsReducer(state: PostsState | undefined, action: Action) {
  return createPostsReducer(state, action);
}
