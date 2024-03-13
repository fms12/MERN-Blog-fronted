import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchPostBySlugAsync,
  selectPostListStatus,
  selectedPostBySlug,
} from "../postSlice";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import CommentSection from "../../comment/components/CommentSection";

function PostDetails() {
  const posts = useSelector(selectedPostBySlug);
  const status = useSelector(selectPostListStatus);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchPostBySlugAsync(slug));
  }, [dispatch, slug]);
  const isLoadingAndNoPosts =
    status === "loading" && (!posts || posts.length === 0);
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
                <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
                  {post && post?.title} Hello
                </h1>
                <div
                  // to={`/search?category=${post && post.category}`}
                  className="self-center mt-5"
                >
                  <div className="flex border-t border-gray-900/5 mt-2">
                    <div className="relative flex items-center gap-x-2">
                      <img
                        src={post?.user?.profilePicture}
                        alt=""
                        className="h-6 w-6 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={post?.user?.href}>
                            <span className="absolute inset-0" />
                            {post?.user?.name
                              ? post?.user?.name
                              : post?.user?.username}
                          </a>
                        </p>
                        {/* <p className="text-gray-600">{post.author.role}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
                  <span>
                    {post &&
                      new Date(post?.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                  </span>
                  <span className="italic">
                    {post && (post?.content?.length / 1000).toFixed(0)} mins
                    read
                  </span>
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
                <CommentSection />

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
