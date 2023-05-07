import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/posts.interface';

@Component({
  selector: 'app-comments-list-card',
  templateUrl: './comments-list-card.component.html',
  styleUrls: ['./comments-list-card.component.scss']
})
export class CommentsListCardComponent {

  @Input() comment!: IComment;

}
