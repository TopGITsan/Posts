import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import * as postsReducer from './posts-store/posts-page.reducer';
import { postsFeatureStoreKey } from './posts-store/posts-page.state';
import * as postsEffects from './posts-store/posts/posts.effects';
import { PostsComponent } from './posts.component';
import { canActivateAndLoadPosts } from './guards/can-activate.guard';
export const postsRoutes: Routes = [
  {
    path: '',
    component: PostsComponent,
    providers: [
      provideState(postsFeatureStoreKey, postsReducer.reducers, {
        metaReducers: postsReducer.metaReducers,
      }),
      provideEffects([postsEffects]),
    ],
    children: [
      {
        path: 'list',
        canActivate: [canActivateAndLoadPosts()],
        loadComponent: () =>
          import('./posts-list/posts-list.component').then(
            m => m.PostsListComponent
          ),
      },

      {
        path: 'create',
        loadComponent: () =>
          import('./create-post/create-post.component').then(
            m => m.CreatePostComponent
          ),
      },

      {
        path: ':Id',
        loadComponent: () =>
          import('./post-details/post-details.component').then(
            m => m.PostDetailsComponent
          ),
      },

      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];
