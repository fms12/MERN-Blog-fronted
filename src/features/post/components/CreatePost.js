import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "../../utils/EditorToolbar";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../../auth/authSlice";
import { useForm } from "react-hook-form";
import { createPostAsync } from "../postSlice";

function CreatePost() {
  // const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handlePostCreate = (data) => { 
    const postData = {...data,content:value};
    dispatch(createPostAsync(postData));
    reset()
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
              {...register("option", {
                required: "option is required",
              })}
            >
              <option value="uncategorized">Select a category</option>
              <option value="javascript">JavaScript</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
            </select>
          </div>
          <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
            <input type="text" {...register("image")}  className="w-full"/>
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
              value={value}
              onChange={setValue}
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
