export const posts = ($http, API) => {
  const create = (newPost) => {
      const { url } = API;
      const { author, title, text } = newPost;
      
      return $http.post(`${url}/posts`, { data: {author, title, text } });
  }
  
  const retrieve = () => {
      const { url } = API;

      return $http.get(`${url}/posts`);
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
  
  return { create, retrieve, update, deletePost };
}
posts.$inject = ['$http', 'API'];
