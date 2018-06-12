import { Component, OnInit } from '@angular/core';
import { PostService } from '../posts/shared/post.service';
import { Post } from '../posts/shared/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

 
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

  }

}
