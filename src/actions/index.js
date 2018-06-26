// Actions
export const TYPES = {
  UPDATE_POSTS: 'UPDATE_POSTS'
};

// Action creators
export const updatePosts = (posts) =>
  ({ type: TYPES.UPDATE_POSTS, posts });
