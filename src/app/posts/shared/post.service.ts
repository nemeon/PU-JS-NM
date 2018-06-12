import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Post } from "./post.model"

@Injectable()

export class PostService {

  postsList: AngularFireList<any>;
  selectedPost: Post = new Post();

  constructor(public database: AngularFireDatabase) { }

  getData() {
    this.postsList = this.database.list('posts');
    return this.postsList;
  }

  insertPost(post: Post) {
    this.postsList.push({
      imgUrl: post.imgUrl,
      title: post.title,
      description: post.description,
      username: post.username
    }
    );
  }

  updatePost(post: Post) {
    this.postsList.update(post.$key, {
      imgUrl: post.imgUrl,
      title: post.title,
      description: post.description,
      username: sessionStorage.getItem("currentUser")
    }
    );
  }

  deletePost($key: string) {
    this.postsList.remove($key);
  }


}
