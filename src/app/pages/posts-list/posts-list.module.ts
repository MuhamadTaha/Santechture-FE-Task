import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list.component';
import { PostsListRoutingModule } from './posts-list-routing.module';
import { PostsListCardComponent } from '../components/posts-list-card/posts-list-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

const primengModules = [
  PaginatorModule,
  DialogModule,
  InputTextModule,
  InputTextareaModule,
]

@NgModule({
  declarations: [
    PostsListComponent,
    PostsListCardComponent,
  ],
  imports: [
    CommonModule,
    PostsListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...primengModules,
  ]
})
export class PostsListModule { }
