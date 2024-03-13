import { useSelector } from "react-redux";
import { selectAllPosts } from "../postSlice";
import { Link } from "react-router-dom";
import { Avatar, CircularProgress, Skeleton } from "@mui/material";

export default function PostFeed() {
  const posts = useSelector(selectAllPosts);
  const isLoadingAndNoPosts = !posts || posts.length === 0;
  return (
    <>
      {isLoadingAndNoPosts ? (
        <div className="flex justify-center items-center  absolute top-0 bottom-0 left-0 right-0">
          <CircularProgress />
        </div>
      ) : (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From the blog
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
              <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                {posts.map((post) => (
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
                        <a
                          href={post.category.href}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {post?.category}
                        </a>
                      </div>
                      <div className="group relative max-w-xl">
                        <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <Link to={`/post-detail/${post?.slug}`}>
                            <span className="absolute inset-0" />
                            {post?.title}
                          </Link>
                        </h3>

                        <div
                          className="p-3 max-w-2xl mx-auto w-full post-content mt-1 text-sm leading-6 text-gray-600"
                          dangerouslySetInnerHTML={{
                            __html: post && post?.content,
                          }}
                        ></div>
                      </div>
                      <div className="flex border-t border-gray-900/5 mt-2">
                        <div className="relative flex items-center gap-x-2">
                          <Avatar
                            alt={post?.user?.name}
                            style={{
                              height: "24px",
                              width:"1.5rem",
                              backgroundColor: "#1d4ed8",
                            }}
                            src={post?.user?.profilePicture}
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
