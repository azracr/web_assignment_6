export async function fetchPosts(signal) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    signal,
  });

  if (!res.ok) {
    throw new Error("Posts could not be loaded.");
  }

  const data = await res.json();
  return data;
}
