import React from "react";
import { getPosts, getPostDetails } from "../../services";
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentForm,
} from "../../components";

const PostDetails = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-col-1 lg:grid-col-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {/* <PostDetail />
          <Author />
          <CommentForm />
          <Comments /> */}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
