import { createAction, props } from '@ngrx/store';
import { CreatePost } from './create-post.state';

export const formValueChange = createAction(
  '[Create Post] Form value change',
  props<CreatePost>()
);
