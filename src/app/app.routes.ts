import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { RegisterComponent } from './core/register/register.component';

export const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () =>
      import('./features/posts/posts.routes').then(m => m.postsRoutes),
  },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
