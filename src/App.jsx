import { useEffect, useReducer, useState } from "react";
import { fetchPosts } from "./api/postsApi.js";
import { initialPostsState, postsReducer } from "./reducer/postsReducer.js";
import FilterForm from "./components/FilterForm.jsx";
import PostList from "./components/PostList.jsx";

export default function App() {
  const [state, dispatch] = useReducer(postsReducer, initialPostsState);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      dispatch({ type: "FETCH_START" });

      try {
        const data = await fetchPosts(controller.signal);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        if (err.name === "AbortError") return;

        dispatch({
          type: "FETCH_ERROR",
          payload: err.message || "Something went wrong.",
        });
      }
    }

    loadPosts();

    return () => {
      controller.abort();
    };
  }, []);

  const text = filter.trim().toLowerCase();
  const filteredPosts = state.posts.filter((p) =>
    p.title.toLowerCase().includes(text)
  );

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1 style={{ marginTop: 0 }}>Post Dashboard</h1>

      <FilterForm value={filter} onChange={setFilter} />

      {state.loading && <p>Loading posts...</p>}

      {!state.loading && state.error && (
        <p style={{ color: "crimson" }}>Error: {state.error}</p>
      )}

      {!state.loading && !state.error && filteredPosts.length === 0 && (
        <p>No posts found.</p>
      )}

      {!state.loading && !state.error && filteredPosts.length > 0 && (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}
