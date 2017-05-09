import _ from 'lodash';

export class BlogController {
  constructor(Posts) {
    this.message = 'The latest from the blog';
    this.search = '';
      
    Posts.retrieve()
    .then((response) => {
      this.posts = response && response.data || [];
    })
    .catch((e) => {
      this.posts = [];
      console.error(e);
    });
  }
}
BlogController.$inject = [ 'Posts' ];
