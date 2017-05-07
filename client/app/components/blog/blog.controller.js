import _ from 'lodash';

class BlogController {
  
  constructor() {
      this.message = 'The latest from the Blog';    
      this.posts = [];
      
      _.times(6, () => {
        this.posts.push({
          author: 'Connie Leung',
          title: 'What is New in Angular 4?'
        });
      });
  }
}

export {BlogController};
