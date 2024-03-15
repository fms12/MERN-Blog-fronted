import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deletePostAsync,
  fetchPostBySlugAsync,
  selectPostListStatus,
  selectedPostBySlug,
} from "../postSlice";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import CommentSection from "../../comment/components/CommentSection";
import {
  ChatBubbleLeftRightIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Tooltip } from "@mui/material";
import {
  fetchCommentBySlugAsync,
  selectAllComments,
} from "../../comment/commentSlice";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { selectLoggedInUser } from "../../auth/authSlice";
import Modal from "../../utils/Modal";

function PostDetails() {
  const posts = useSelector(selectedPostBySlug);
  const status = useSelector(selectPostListStatus);
  const comments = useSelector(selectAllComments);
  const user = useSelector(selectLoggedInUser);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [openModal, setOpenModal] = useState(null);
  useEffect(() => {
    dispatch(fetchPostBySlugAsync(slug));
    dispatch(fetchCommentBySlugAsync(slug));
  }, [dispatch, slug]);
  const isLoadingAndNoPosts =
    status === "loading" && (!posts || posts.length === 0);
  const handleComments = () => {
    setOpen(!open);
  };
const handleDelete = () => {
  dispatch(deletePostAsync(slug))
    .then(() => {
      // After the post is deleted, navigate to the home page
      navigate("/"); // Replace '/' with the path to your home page if it's different
    })
    .catch((error) => {
      // Handle any errors that might occur during the deletion
      console.error("Error deleting post:", error);
    });
};
  return (
    <>
      {isLoadingAndNoPosts ? (
        <div className="flex justify-center items-center absolute  left-[420px] top-32 w-full max-w-2xl ">
          <Stack spacing={2}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="42rem" />

            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width="100%" height={60} />
            <Skeleton variant="rounded" width="42rem" height={60} />
            <Skeleton variant="rounded" width="42rem" height={20} />
            <Skeleton variant="rounded" width="42rem" height={20} />
            <Skeleton variant="rounded" width="42rem" height={20} />
          </Stack>
        </div>
      ) : (
        <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
          {posts &&
            posts.map((post) => (
              <div>
                <h1 className="text-3xl mt-10 p-3 font-serif max-w-2xl mx-auto lg:text-4xl font-bold leading-10">
                  {post && post?.title}
                </h1>
                <div className="mt-10 max-w-2xl mx-auto ">
                  <div className="flex mt-2 mx-auto">
                    <div className="relative flex items-center gap-x-2 ">
                      <img
                        src={post?.user?.profilePicture}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />

                      <div className="text-sm leading-6 mx-auto gap-x-2">
                        <p className="font-semibold text-gray-900">
                          <a href={post?.user?.href}>
                            <span className="absolute inset-0" />
                            {post?.user?.name
                              ? post?.user?.name
                              : post?.user?.username}
                          </a>
                        </p>
                        <span className="text-xs font-normal text-[#4a4a4a]">
                          {post &&
                            new Date(post?.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between p-3 border-b border-t border-[#f2f2f2] mx-auto w-full max-w-2xl text-xs mt-10 text-[#737373]">
                  <div className="flex justify-center items-center cursor-pointer">
                    <span className="text-xs font-normal text-[#4a4a4a] mr-4">
                      {post && (post?.content?.length / 1000).toFixed(0)} mins
                      read
                    </span>
                    <Tooltip title="comment" placement="top">
                      <ChatBubbleLeftRightIcon
                        className="h-6 w-6 mr-2"
                        onClick={handleComments}
                      />
                    </Tooltip>
                    {comments?.length}
                  </div>
                  {user?.id === post?.user?.id && (
                    <div className="flex ml-2">
                      <Link to={`/update/${post?.slug}`}>
                        <PencilSquareIcon className="h-6 w-6 cursor-pointer mr-2" />
                      </Link>
                      <Modal
                        title={`Delete "${post?.title}" `}
                        message="Are you sure you want to delete this post ?"
                        dangerOption="Delete"
                        cancelOption="Cancel"
                        dangerAction={() => handleDelete()}
                        cancelAction={() => setOpenModal(null)}
                        showModal={openModal === post?.title}
                      ></Modal>
                      <button
                        onClick={(e) => {
                          setOpenModal(post?.title);
                        }}
                      >
                        
                        <TrashIcon className="h-6 w-6 cursor-pointer" />
                      </button>
                    </div>
                  )}
                </div>
                <img
                  src={post && post.image}
                  alt={post && post.title}
                  className="mt-10 p-3 max-h-[600px] w-full object-cover"
                />
                <div
                  className="p-3 max-w-2xl mx-auto w-full post-content"
                  dangerouslySetInnerHTML={{ __html: post && post?.content }}
                ></div>
                <div className="max-w-4xl mx-auto w-full">
                  {/* <CallToAction /> */}
                </div>
                {open && <CommentSection />}

                {/* <div className="flex flex-col justify-center items-center mb-5">
                  <h1 className="text-xl mt-5">Recent articles</h1>
                  <div className="flex flex-wrap gap-5 mt-5 justify-center">
                    {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
                  </div>
                </div> */}
              </div>
            ))}
        </main>
      )}
    </>
  );
}

export default PostDetails;
