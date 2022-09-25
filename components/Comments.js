import React, { useState, useEffect, useRef } from "react";

const Comments = ({ slug }) => {
  const [error, seterror] = useState(false);
  const [localStorage, setlocalStorage] = useState(null);
  const [showSuccessMessage, setshowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = "";

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comments</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-pink-600 bg-gray-100 text-gray-700"
          placeholder="Comment..."
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-pink-600 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-pink-600 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      {error && <p className="text-sm text-red-500">All field are required!</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post
        </button>
        {showSuccessMessage && (
          <p className="text-sm font-semibold mt-3 text-green-700">Submitted</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
