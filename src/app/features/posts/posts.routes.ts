import { Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { provideState } from '@ngrx/store';
import { postsFeatureStoreKey } from './posts-store/posts-page.state';
import * as postsReducer from './posts-store/posts-page.reducer';
export const postsRoutes: Routes = [
  {
    path: '',
    component: PostsComponent,
    providers: [
      provideState(postsFeatureStoreKey, postsReducer.reducers, {
        metaReducers: postsReducer.metaReducers,
      }),
    ],
    children: [
      {
        path: 'list',
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
