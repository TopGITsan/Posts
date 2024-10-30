import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () =>
      import('./features/posts/posts.routes').then(m => m.postsRoutes),
  },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
