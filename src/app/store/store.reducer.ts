import { isDevMode } from '@angular/core';
import {
  Action,
  ActionReducerMap,
  createReducer,
  MetaReducer,
} from '@ngrx/store';
import { AppState, HeaderState, initialHeaderState } from './store.state';

export const reducers: ActionReducerMap<AppState> = {
  header: headerReducer,
};

// intercept each action before dispatching the associated reducer
export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];

// header reducer
const createHeaderReducer = createReducer(
  initialHeaderState
  // tap into NgRx actions to mutate the state
);

function headerReducer(state: HeaderState | undefined, action: Action) {
  return createHeaderReducer(state, action);
}
