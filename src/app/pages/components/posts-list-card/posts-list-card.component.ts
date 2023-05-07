import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/posts.interface';

@Component({
  selector: 'app-posts-list-card',
  templateUrl: './posts-list-card.component.html',
  styleUrls: ['./posts-list-card.component.scss']
})
export class PostsListCardComponent {

  @Input() post!: IPost;

  @Output() onClickEdit = new EventEmitter<any>();
  @Output() onClickDetails = new EventEmitter<any>();

  constructor() { }

  onClickEditFn() {
    this.onClickEdit.emit(this.post)
  }

  onClickDetailsFn() {
    this.onClickDetails.emit(this.post.id)
  }

}
