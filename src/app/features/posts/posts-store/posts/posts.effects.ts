import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  EMPTY,
  exhaustMap,
  map,
  of,
  switchMap,
} from 'rxjs';
import { PostsService } from '../../../../graphQL/services/posts.service';
import {
  LOAD_POSTS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_SUCCESS,
  SELECT_POST_ID,
} from './posts.actions';
export const loadPosts = createEffect(
  (actions$ = inject(Actions), postsService = inject(PostsService)) => {
    return actions$.pipe(
      ofType(LOAD_POSTS),
      exhaustMap(() =>
        postsService.queryPosts().pipe(
          map(posts => LOAD_POSTS_SUCCESS({ posts })),
          catchError((error: { message: string }) =>
            of(LOAD_POSTS_FAILURE({ error: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const selectPostId = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(SELECT_POST_ID),
      switchMap(({ postId }) => {
        if (!postId) {
          return EMPTY;
        }
        return of(router.navigateByUrl(`/posts/${postId}`));
      })
    );
  },
  { functional: true, dispatch: false }
);
