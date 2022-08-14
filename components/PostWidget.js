import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  console.log(relatedPosts);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
      return;
    }
    getRecentPosts().then((result) => setRelatedPosts(result));
  }, [slug]);

  return (
    <div className="flex flex-col bg-white shadow-lg shadow-blue-900/50 rounded-md p-8 mb-8 gap-2">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div
          key={post.title}
          className="group cursor-pointer flex items-center w-full"
        >
          <div className="w-16 flex-shrink-0">
            <img
              src={post.featuredImage?.url}
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full object-cover h-16 w-full"
            />
          </div>
          <div className="flex-grow ml-4 overflow-hidden">
            <Link
              href={`post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              <p className="transition duration-200 group-hover:text-pink-600 truncate">
                {post.title}
              </p>
            </Link>
            <p className="text-gray-500 text-sm">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget;
