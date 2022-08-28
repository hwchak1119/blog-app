import React from "react";
import moment from "moment";

const PostDetail = ({ post }) => {
  return (
    <div className="bg-white shadow-lg shadow-blue-900/50 rounded-md overflow-hidden lg:p-8 pb-12 mb-8">
      <div className="relative shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center w-full lg:w-auto mr-4">
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
            <span className="material-symbols-rounded">schedule</span>
            <span className="whitespace-nowrap">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
      </div>
    </div>
  );
};

export default PostDetail;
