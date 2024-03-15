import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "../../utils/EditorToolbar";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../../auth/authSlice";
import { useForm } from "react-hook-form";
import { useHistory, useNavigate } from "react-router-dom";
import {
  clearSelectedPost,
  createPostAsync,
  fetchPostBySlugAsync,
  selectedPostBySlug,
  updatePostAsync,
} from "../postSlice";
import { useParams } from "react-router-dom";

function CreatePost() {
  // const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();
  const selectedPost = useSelector(selectedPostBySlug);
  const navigate = useNavigate();
  const { slug } = useParams();
  const [valueReactQuill, setValueReactQuill] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (slug) {
      dispatch(fetchPostBySlugAsync(slug));
    } else {
      dispatch(clearSelectedPost());
    }
  }, [slug, dispatch]);
  useEffect(() => {
    if (slug && selectedPost) {
      setValue("title", selectedPost[0]?.title);
      setValue("category", selectedPost[0]?.category);
      setValue("image", selectedPost[0]?.image);
      setValueReactQuill(selectedPost[0]?.content);
    }
  }, [selectedPost, slug, setValue]);
const handlePostCreate = (data) => {
  const postData = { ...data, content: valueReactQuill };
  if (slug) {
    dispatch(updatePostAsync({ update: postData, slug }))
      .then(() => {
        // After the post is updated, navigate to the post details page
        navigate(`/post-detail/${slug}`);
      })
      .catch((error) => {
        // Handle any errors that might occur during the update
        console.error("Error updating post:", error);
      });
  } else {
    dispatch(createPostAsync(postData))
      .then((response) => {
        // After the post is created, navigate to the post details page
        // You'll need to get the slug of the newly created post
        // For now, let's assume the slug is returned in the response
        const newSlug = response.payload.data.slug; // Replace this with the actual slug from the response
        navigate(`/post-detail/${newSlug}`);
      })
      .catch((error) => {
        // Handle any errors that might occur during the creation
        console.error("Error creating post:", error);
      });
    reset();
  }
};
  return (
    <div>
      <div className="p-3 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-center text-3xl my-7 font-semibold underline">
          Create Post
        </h1>
        <form
          className="flex flex-col gap-4"
          noValidate
          onSubmit={handleSubmit(handlePostCreate)}
        >
          <div className="flex flex-col gap-4 sm:flex-row justify-between border p-2 text-bold">
            <textarea
              type="text"
              placeholder="Title"
              id="title"
              className="flex-1"
              {...register("title", {
                required: "title is required",
              })}
            />
            <select
              className="p-2"
              {...register("category", {
                required: "category is required",
              })}
            >
              <option value="uncategorized">Select a category</option>
              <option value="javascript">JavaScript</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
            </select>
          </div>
          <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
            <input type="text" {...register("image")} className="w-full" />
          </div>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-white dark:border-gray-600 ">
            <div classname="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
              <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                  <EditorToolbar />
                </div>
              </div>
            </div>
            <ReactQuill
              theme="snow"
              placeholder={"Write something awesome..."}
              modules={modules}
              formats={formats}
              className="h-72 mb-12"
              value={valueReactQuill}
              onChange={setValueReactQuill}
            />
          </div>
          <button
            type="submit"
            className="bg-[#e11d48] p-2 rounded-full border text-white"
          >
            Publish
          </button>
          {/* {publishError && (
            <Alert className="mt-5" color="failure">
              {publishError}
            </Alert>
          )} */}
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
