import _ from 'lodash';

export const posts = ($http, API) => {
  
  let allPosts = [];
  const create = (newPost) => {
      const { url } = API;
      const { author, title, text } = newPost;
      
      return $http.post(`${url}/posts`, { data: {author, title, text } });
  }
  
  const retrieve = () => {
      const { url } = API;

      return $http.get(`${url}/posts`)
        .then ((response) => { allPosts = response.data; });
  }
  
  const retrieveOne = (id) => {
      
      return new Promise( (resolve, reject) => {
         let post = _.find(allPosts, {id})
         if (post)  {
           resolve(post);
         } else {
           return $http.get(`${url}/posts/${id}`)
            .then((response) => {
                post = response.data;
                allPosts.push(post);
                resolve(post);
            })
            .catch((e) => {
              console.error(e);
              reject(e);
            });           
         }
      });    
  }
  
  const getPosts = () => {
    return allPosts;
  }

  const update = (updatePost) => {
      const { url } = API;
      const { id, author, title, text } = updatePost;

      return $http.put(`${url}/posts/${id}`, { author, title, text });
  }

  const deletePost = (id) => {
      const { url } = API;

      return $http.delete(`${url}/posts/${id}`);
  }
  
  return { create, retrieve, retrieveOne, getPosts, update, deletePost };
}
posts.$inject = ['$http', 'API'];
