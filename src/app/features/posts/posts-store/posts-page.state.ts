import { PostsState, postsStateKey } from './posts/posts.state';

export const postsFeatureStoreKey = 'postsPage';

export interface PostsPageState {
  [postsStateKey]: PostsState;
}
