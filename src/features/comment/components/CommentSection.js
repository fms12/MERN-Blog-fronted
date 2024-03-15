import React from "react";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../../auth/authSlice";
import { useForm } from "react-hook-form";
import { createCommentAsync, selectAllComments } from "../commentSlice";
import { useParams } from "react-router-dom";

function CommentSection() {
  const userInfo = useSelector(selectLoggedInUser);

  const comments = useSelector(selectAllComments);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCommentCreation = (data) => {
    //  console.log(data);
    const comment = { ...data };
    dispatch(createCommentAsync({ comment, slug }));
    reset();
  };
  return (
    <section className="border-t-[0.5px] border-gray-400 mt-2 p-4 max-w-2xl mx-auto">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
            Discussion ({comments?.length})
          </h2>
        </div>
        {userInfo && (
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                className="inline-block h-10 w-10 rounded-full"
                src={userInfo?.profilePicture}
                alt=""
              />
            </div>
            <form
              className="mb-6 w-full relative"
              noValidate
              onSubmit={handleSubmit(handleCommentCreation)}
            >
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="6"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  {...register("comment", {
                    required: "comment is required",
                  })}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-indigo-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Post comment
              </button>
            </form>
          </div>
        )}
        <Comments />
      </div>
    </section>
  );
}

export default CommentSection;
