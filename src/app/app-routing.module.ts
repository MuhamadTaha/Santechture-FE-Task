import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/posts-list/posts-list.module').then((m) => m.PostsListModule),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./pages/post-details/post-details.module').then((m) => m.PostDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
