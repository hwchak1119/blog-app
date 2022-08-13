import React from "react";
import moment from "moment";
import Link from "next/link";

function PostCard({ post }) {
  return (
    <div>
      <div className='bg-white shadow-lg rounded-md p-0 lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
          {post.auther}
          <img
            src={post.featuredImage.url}
            alt='post.title'
            className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-md lg:rounded-md'
          />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
