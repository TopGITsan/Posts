import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { PostsService } from '../../../../graphQL/services/posts.service';
import {
  LOAD_POSTS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_SUCCESS,
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
