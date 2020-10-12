export const findAllPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    return json;
  });
};

export const setLikePost = (id) => {};

export const setCommentPost = (id, comment) => {};

export const setSavePost = (id) => {};
