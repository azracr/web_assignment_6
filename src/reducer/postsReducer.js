export const initialPostsState = {
  posts: [],
  loading: false,
  error: null,
};

export function postsReducer(state, action) {
  if (action.type === "FETCH_START") {
    return { ...state, loading: true, error: null };
  }

  if (action.type === "FETCH_SUCCESS") {
    return { ...state, loading: false, posts: action.payload, error: null };
  }

  if (action.type === "FETCH_ERROR") {
    return { ...state, loading: false, error: action.payload };
  }

  return state;
}
