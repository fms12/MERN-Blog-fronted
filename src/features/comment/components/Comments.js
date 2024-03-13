import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentBySlugAsync, selectAllComments } from "../commentSlice";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

function Comments() {
  const comments = useSelector(selectAllComments);
  const {slug} = useParams()
  const dispatch = useDispatch();
  // const {slug}  = useSelector()
  useEffect(()=>{
      dispatch(fetchCommentBySlugAsync(slug))
  },[slug,dispatch])
  return (
    <>
      {comments &&
        comments.map((comment) => (
          <div className="mt-4">
            <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    {comment?.user?.profilePicture ? (
                      <img
                        className="mr-2 w-10 h-10 rounded-full border text-[10px] text-center border-white"
                        src={comment?.user?.profilePicture}
                        alt={comment?.user?.name}
                      />
                    ) : (
                      <Avatar
                        alt={comment?.user?.name}
                        style={{
                          marginRight: "8px",
                          backgroundColor: "#1d4ed8",
                        }}
                      />
                    )}
                    {comment?.user?.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time
                      pubdate
                      dateTime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      {new Date(comment?.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </time>
                  </p>
                </div>
                {/* <button
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
              <span className="sr-only">Comment settings</span>
            </button> */}
                {/* // TODO: Dropdown menu */}
                {/* <div
              id="dropdownComment1"
              className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div> */}
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                {comment && comment?.content}
              </p>
              {/* //TODO: creating repiles  */}
              {/* <div className="flex items-center mt-4 space-x-4">
            <button
              type="button"
              className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
            >
              <svg
                className="mr-1.5 w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
              </svg>
              Reply
            </button>
          </div> */}
            </article>
          </div>
        ))}
    </>
  );
}

export default Comments;
