import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public postService: PostService) { }

  ngOnInit() {
   
    this.resetForm();
  }

  onSubmit(postForm: NgForm) {
    if (postForm.value.$key == null) {
      this.postService.insertPost(postForm.value);
    }
    else {
      this.postService.updatePost(postForm.value);
    }
    this.resetForm(postForm);
  }

  resetForm(postForm?: NgForm) {
    if (postForm != null) {
      postForm.reset();
    }
    this.postService.selectedPost = {
      $key: null,
      imgUrl: "https://www.igraya.com/wp-content/themes/myarcadetheme/images/noimg.png",
      title: '',
      description: '',
      username: sessionStorage.getItem("currentUser")

    }
  }

}
