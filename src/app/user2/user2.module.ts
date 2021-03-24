import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User2Component } from './user2.component';

const routes: Routes = [
  {
    path: '',
    component: User2Component
  }
];

@NgModule({
  declarations: [User2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class User2Module { }
