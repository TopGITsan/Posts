import { Routes } from '@angular/router';
import { PostsComponent } from './posts.component';

export const postsRoutes: Routes = [
  {
    path: '',
    component: PostsComponent,
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
