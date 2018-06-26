import { TYPES } from '../actions';

const posts = (state = [], action) => {
  switch (action.type) {
    case TYPES.UPDATE_POSTS:
      return [...action.posts];
    default:
      return state;
  }
}

export default posts;
