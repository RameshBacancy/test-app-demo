import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user1',
    loadChildren: () => import('./user1/user1.module').then(m => m.User1Module)
  },
  {
    path: 'user2',
    loadChildren: () => import('./user2/user2.module').then(m => m.User2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
