import {
  CreatePost,
  createPostStateKey,
} from '../create-post/store/create-post.state';
import { PostsState, postsStateKey } from './posts/posts.state';

export const postsFeatureStoreKey = 'postsPage';

export interface PostsPageState {
  [postsStateKey]: PostsState;
  [createPostStateKey]: CreatePost;
}
