import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PostsPageFacadeService } from '../posts-store/posts-page-facade.service';

export function canActivateAndLoadPosts(): CanActivateFn {
  return () => {
    const postsPageFacade: PostsPageFacadeService = inject(
      PostsPageFacadeService
    );

    postsPageFacade.onLoadPosts();

    return true;
  };
}
