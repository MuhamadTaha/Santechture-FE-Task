import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details.component';
import { PostDetailsRoutingModule } from './post-details-routing.module';
import { CommentsListCardComponent } from '../components/comments-list-card/comments-list-card.component';

@NgModule({
  declarations: [
    PostDetailsComponent,
    CommentsListCardComponent
  ],
  imports: [
    CommonModule,
    PostDetailsRoutingModule
  ]
})
export class PostDetailsModule { }
