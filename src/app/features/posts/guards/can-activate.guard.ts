import { inject } from '@angular/core';
import { CanActivateFn, GuardResult, MaybeAsync } from '@angular/router';
import { PostsPageFacadeService } from '../posts-store/posts-page-facade.service';

export function canActivateAndLoadPosts(): CanActivateFn {
  return (): MaybeAsync<GuardResult> => {
    const postsPageFacade: PostsPageFacadeService = inject(
      PostsPageFacadeService
    );

    postsPageFacade.onLoadPosts();

    return true;
  };
}
