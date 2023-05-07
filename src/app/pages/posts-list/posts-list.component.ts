import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/posts.interface';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  postsList!: IPost[];

  showEditDialog: boolean = false

  showLoader: boolean = false

  first: number = 0;
  rows: number = 9;

  editForm!: FormGroup;

  constructor(private router: Router, private generalService: GeneralService) {
  }

  ngOnInit() {
    this.getPostsList(0, 9);
    this.formInit();
  }

  formInit() {
    this.editForm = new FormGroup({
      'id': new FormControl(''),
      'title': new FormControl(''),
      'body': new FormControl(''),
    })
  }

  getPostsList(start: number, limit: number) {
    this.showLoader = true;
    this.generalService.getPosts(start, limit).subscribe((posts: IPost[]) => {
      if (posts) {
        this.postsList = posts
      } else {
        this.generalService.showToaster('error', 'Error', 'Something Went Wrong')
      }
      this.showLoader = false;
    })
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    const start = event.page * event.rows
    const limit = event.rows
    this.getPostsList(start, limit)
  }

  onClickEdit(postDetails: IPost) {
    this.editForm.patchValue({
      id: postDetails.id,
      title: postDetails.title,
      body: postDetails.body
    })
    this.showEditDialog = true
  }

  onClickDetails(id: number | string) {
    this.router.navigate(
      [`/details/${id}`]
    );
  }

  closeDialog() {
    this.showEditDialog = false
  }

  submitEdit() {
    this.generalService.editPost(this.editForm.value).subscribe(res => {
      if (res) {
        this.generalService.showToaster('success', 'Edit Post', 'Post Edited Successfully')
        this.closeDialog();
      } else {
        this.generalService.showToaster('error', 'Error', 'Something Went Wrong')
      }
    })
  }

}
