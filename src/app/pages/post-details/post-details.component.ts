import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment, IPost } from 'src/app/interfaces/posts.interface';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postDetails!: IPost;
  postComments!: IComment[];

  constructor(private route: ActivatedRoute, private generalService: GeneralService) { }

  ngOnInit() {
    this.getPostDetails(this.route.snapshot.params['id'])
  }

  getPostDetails(id: number) {
    this.generalService.getPostDetails(id).subscribe((postDetails: IPost) => {
      if (postDetails) {
        this.postDetails = postDetails;
        this.getPostComments(postDetails.id)
      } else {
        this.generalService.showToaster('error', 'Error', 'Something Went Wrong')
      }
    })
  }

  getPostComments(id: number) {
    this.generalService.getPostComments(id).subscribe((postComments: IComment[]) => {
      if (postComments) {
        this.postComments = postComments;
      } else {
        this.generalService.showToaster('error', 'Error', 'Something Went Wrong')
      }
    })
  }


}
