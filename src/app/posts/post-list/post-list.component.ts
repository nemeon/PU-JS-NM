import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList: Post[];

  constructor(public postService: PostService) { }

  ngOnInit() {

    var x = this.postService.getData();
    x.snapshotChanges().subscribe(item => {
      this.postList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        if (y["username"] == sessionStorage.getItem("currentUser")) {
          this.postList.push(y as Post);
        }
      })
    })
  }

  onEdit(post: Post) {
    this.postService.selectedPost = Object.assign({}, post);
  }

  onDelete(key: string) {
    if (confirm("Are you sure you want to delete this post?") == true)
      this.postService.deletePost(key);
  }
}
