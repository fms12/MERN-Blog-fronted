import { useDispatch, useSelector } from "react-redux";
import { fetchPostByFiltersAsync, selectAllPosts } from "../postSlice";
import { Link } from "react-router-dom";
import { Avatar, CircularProgress, Skeleton } from "@mui/material";
import { useEffect } from "react";

export default function PostFeed() {
  const posts = useSelector(selectAllPosts);
  const dispatch  = useDispatch()
  const isLoadingAndNoPosts = !posts || posts.length === 0;
    useEffect(() => {
      dispatch(fetchPostByFiltersAsync());
    }, [dispatch]);

  return (
    <>
      {isLoadingAndNoPosts ? (
        <div className="flex justify-center items-center  absolute top-0 bottom-0 left-0 right-0">
          <CircularProgress />
        </div>
      ) : (
        <div className="bg-[#f5f5f5] py-16 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From the blog
              </h2>

              <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                {posts &&
                  posts.map((post) => (
                    <article
                      key={post?.id}
                      className="relative isolate flex flex-col gap-8 lg:flex-row  h-[11rem]"
                    >
                      <div className="relative lg:w-48 lg:shrink-0 ">
                        <img
                          src={post?.image}
                          alt=""
                          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div>
                        <div className="flex items-center gap-x-4 text-xs ">
                          <time
                            dateTime={post?.createdAt}
                            className="text-gray-500"
                          >
                            {new Date(post?.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </time>
                          <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                            {post && post?.category}
                          </div>
                        </div>
                        <div className="group relative max-w-xl">
                          <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <Link to={`/post-detail/${post?.slug}`}>
                              <span className="absolute inset-0" />
                              {post?.title}
                            </Link>
                          </h3>

                          <div
                            className="p-3 max-w-2xl mx-auto w-full post-content mt-1 text-sm leading-6 text-gray-600 "
                            dangerouslySetInnerHTML={{
                              __html:
                                post && post?.content
                                  ? post.content.length > 100
                                    ? post.content.substring(0, 120) + "...." // Show only the first 100 characters followed by ellipsis
                                    : post.content // If content length is less than or equal to 100, show full content
                                  : " ... ", // Show default message if post or post content is not available
                            }}
                          ></div>
                        </div>
                        <div className="flex mt-1">
                          <div className="relative flex items-center gap-x-2">
                            <Avatar
                              alt={post?.user?.name}
                              style={{
                                height: "24px",
                                width: "1.5rem",
                                backgroundColor: "#1d4ed8",
                              }}
                              src={post?.user?.profilePicture}
                            />
                            <div className="text-sm leading-2">
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
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
