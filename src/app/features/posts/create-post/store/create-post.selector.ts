import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  postsFeatureStoreKey,
  PostsPageState,
} from '../../posts-store/posts-page.state';

const postsPageStateSelector =
  createFeatureSelector<PostsPageState>(postsFeatureStoreKey);

export const createPostStateSelector = createSelector(
  postsPageStateSelector,
  state => state.createPost
);
