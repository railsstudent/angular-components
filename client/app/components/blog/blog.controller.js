import _ from 'lodash';

export class BlogController {
  constructor(Posts) {
    this.message = 'The latest from the blog';
    this.search = '';
      
    Posts.retrieve()
    .then(() => {
      this.posts = Posts.getPosts();
    })
    .catch((e) => {
      this.posts = [];
      console.error(e);
    });
  }
}
BlogController.$inject = [ 'Posts' ];
