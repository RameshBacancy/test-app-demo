import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User1Component } from './user1.component';


const routes: Routes = [
  {
    path: '',
    component: User1Component
  }
];

@NgModule({
  declarations: [User1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class User1Module { }
