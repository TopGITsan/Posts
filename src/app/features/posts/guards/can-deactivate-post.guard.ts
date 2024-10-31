import { inject } from '@angular/core';
import { PostsPageFacadeService } from '../posts-store/posts-page-facade.service';

export function canDeactivatePost() {
  const postsPageFacade: PostsPageFacadeService = inject(
    PostsPageFacadeService
  );

  postsPageFacade.onUnselectPostId(null);

  return true;
}
