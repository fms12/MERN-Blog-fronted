// A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }

export function fetchLoggedInUser() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/users/own", {
        method: "GET",
        credentials: "include", // Include this line to send cookies with the request
      });
      if (!response.ok) {
        const errorData = await response.json();
        reject(errorData);
      } else {
        const data = await response.json();
        resolve({ data });
      }
    } catch (error) {
      console.error("Error fetching logged-in user:", error);
      reject(error);
    }
  });
}
export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/api/v1/users/update", {
      method: "PUT",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data });
  });
}
