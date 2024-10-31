import { inject } from '@angular/core';
import { CanActivateFn, GuardResult, MaybeAsync } from '@angular/router';
import { PostsPageFacadeService } from '../posts-store/posts-page-facade.service';
import { map } from 'rxjs';

export function canActivateAndLoadPosts(): CanActivateFn {
  return (): MaybeAsync<GuardResult> => {
    const postsPageFacade: PostsPageFacadeService = inject(
      PostsPageFacadeService
    );

    return postsPageFacade.getPosts().pipe(
      map(posts => {
        if (posts.length === 0) {
          postsPageFacade.onLoadPosts();
        }
        return true;
      })
    );
  };
}
