import { Action, createReducer, on } from '@ngrx/store';
import { CreatePost, initialCreatePostState } from './create-post.state';
import { formValueChange } from './create-post.actions';

const createCreatePostReducer = createReducer(
  initialCreatePostState,
  // tap into NgRx actions to mutate the state
  on(formValueChange, (state, { type, ...update }) => ({ ...state, ...update }))
);

export function createPostReducer(
  state: CreatePost | undefined,
  action: Action
) {
  return createCreatePostReducer(state, action);
}
