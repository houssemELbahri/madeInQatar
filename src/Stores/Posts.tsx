import {action, computed, makeObservable, observable} from 'mobx';

class Posts {
  posts = [];

  constructor() {
    makeObservable(this, {
      posts: observable,
      addPost: action,
      deletePost: action,
      countPosts: computed,
    });
  }

  addPost(post) {
    this.posts = [...this.posts, {...post, id: this.posts.length + 1}];
  }

  deletePost(id) {
    this.posts = this.posts.filter(post => post.id != id);
  }

  get countPosts() {
    return this.posts.length;
  }
}

export const postsStore = new Posts();
