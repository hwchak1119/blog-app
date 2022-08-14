import React from "react";
import moment from "moment";
import Link from "next/link";
import "material-symbols/rounded.css";

function PostCard({ post }) {
  return (
    <div className="group cursor-pointer bg-white shadow-lg hover:shadow-2xl shadow-blue-900/50 transition duration-200 rounded-md overflow-hidden p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post?.featuredImage.url}
          alt="post.title"
          className="h-80 w-full object-cover shadow-sm lg:rounded-md"
        />
      </div>
      <h1 className="transition duration-200 text-center mb-8 cursor-pointer group-hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${post?.slug}`}>{post?.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-4">
          <div className="rounded-full overflow-hidden w-8 h-8">
            <img
              src={post?.author?.photo.url}
              alt={post?.author?.name}
              className="object-cover h-8"
            />
          </div>
          <p className="text-gray-700 ml-2 text-lg">{post.author.name}</p>
        </div>
        <div className="inline-flex items-center gap-1 font-medium text-gray-700">
          <span class="material-symbols-rounded">schedule</span>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-200 transform hover:-translate-y-1 hover:shadow-md hover:shadow-pink-500/50 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3">
            View more
          </span>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
