import React from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "../../utils/EditorToolbar";

function CreatePost() {
  return (
    <div>
      <div className="p-3 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-center text-3xl my-7 font-semibold">
          Create a post
        </h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row justify-between">
            <textarea
              type="text"
              placeholder="Title"
              required
              id="title"
              className="flex-1"
            />
            {/* <Select
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="uncategorized">Select a category</option>
              <option value="javascript">JavaScript</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
            </Select> */}
          </div>
          {/* <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
            <FileInput
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <Button
              type="button"
              gradientDuoTone="purpleToBlue"
              size="sm"
              outline
              onClick={handleUpdloadImage}
              disabled={imageUploadProgress}
            >
              {imageUploadProgress ? (
                <div className="w-16 h-16">
                  <CircularProgressbar
                    value={imageUploadProgress}
                    text={`${imageUploadProgress || 0}%`}
                  />
                </div>
              ) : (
                "Upload Image"
              )}
            </Button>
          </div>
          {imageUploadError && (
            <Alert color="failure">{imageUploadError}</Alert>
          )}
          {formData.image && (
            <img
              src={formData.image}
              alt="upload"
              className="w-full h-72 object-cover"
            />
          )} */}
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-white dark:border-gray-600 ">
            <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
              <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
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
            />
          </div>
          <button type="submit" gradientDuoTone="purpleToPink">
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

export default CreatePost