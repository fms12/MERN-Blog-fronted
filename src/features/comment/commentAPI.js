// A mock function to mimic making an async request for data
export function createComment({ comment, slug }) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + `post/${slug}/comments`,
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: { "content-type": "application/json" },
        credentials: "include",
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchCommentBySlug(slug) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + `post/${slug}/comments`
    );
    const data = await response.json();
    resolve({ data });
  });
}
