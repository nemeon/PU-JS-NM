import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { PostService } from '../posts/shared/post.service';
import { Post } from '../posts/shared/post.model';
=======
import { BlogViewModel } from '../core/models/blog-view-model.module';
import { BlogService } from '../core/services/blog/blog.service';
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

<<<<<<< HEAD
 
  postList: Post[];
  filteredList: Post[];

  constructor(public postService: PostService) { }

  ngOnInit() {
    var x = this.postService.getData();
    x.snapshotChanges().subscribe(item => {
      this.postList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.postList.push(y as Post);
      })
      this.filteredList = [];
      this.filteredList = this.postList.reverse();
    })

=======
  blogs: BlogViewModel[];

  constructor(private blogService: BlogService) {
    this.blogs = blogService.takeAllBlogs();
  }

  ngOnInit() {
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8
  }

}
