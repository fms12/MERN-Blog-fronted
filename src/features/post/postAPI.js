// A mock function to mimic making an async request for data
export function createPost(post) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "post/create",
      {
        method: "POST",
        body: JSON.stringify(post),
        headers: { "content-type": "application/json" },
        credentials: "include",
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchPostByFilters() {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}

  // let queryString = "";
  // for (let key in filter) {
  //   const categoryValues = filter[key];
  //   if (categoryValues.length) {
  //     queryString += `${key}=${categoryValues}&`;
  //   }
  // }
  // for (let key in sort) {
  //   queryString += `${key}=${sort[key]}&`;
  // }
  // for (let key in pagination) {
  //   queryString += `${key}=${pagination[key]}&`;
  // }
  // if (admin) {
  //   queryString += `admin=true`;
  // }

  return new Promise(async (resolve) => {
    const response = await fetch("/post/getPosts");
    const data = await response.json();
    // const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data });
  });
}

export function fetchPostBySlug(slug) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "post/" + slug
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function updatePost({ update, slug }) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "post/edit/" + slug,
      {
        method: "PUT",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
        credentials: "include",
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function deletePost(slug) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "post/" + slug,
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        credentials: "include",
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
