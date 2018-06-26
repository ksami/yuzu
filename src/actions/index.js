// Actions
export const TYPES = {
  UPDATE_POSTS: 'UPDATE_POSTS'
};

// Action creators
export const updatePosts = (posts) =>
  ({ type: TYPES.UPDATE_POSTS, posts });

// Async action creators
export const loadAllPosts = () =>
  (dispatch, getState) =>
    fetch("https://jsonbin.io/b/59f721644ef213575c9f6531")
      .then(response => response.json())
      .then(data => dispatch(updatePosts(data)));
