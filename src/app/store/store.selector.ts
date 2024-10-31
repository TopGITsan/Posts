import { createSelector } from '@ngrx/store';
import { AppState, HeaderState } from './store.state';

export const selectFilter = (state: AppState) => state.header;

export const headerTitleSelector = createSelector(
  selectFilter,
  (headerState: HeaderState) => headerState.title
);
