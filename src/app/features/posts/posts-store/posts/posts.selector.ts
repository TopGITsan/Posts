import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postsFeatureStoreKey, PostsPageState } from '../posts-page.state';

const postsPageStateSelector =
  createFeatureSelector<PostsPageState>(postsFeatureStoreKey);

const postsStateSelector = createSelector(
  postsPageStateSelector,
  state => state.posts
);

export const postsSelector = createSelector(
  postsStateSelector,
  state => state.posts
);

export const loadingSelector = createSelector(
  postsStateSelector,
  state => state.loading
);

export const errorSelector = createSelector(
  postsStateSelector,
  state => state.error
);

export const selectedPostIdSelector = createSelector(
  postsStateSelector,
  state => state.selectedPostId
);
