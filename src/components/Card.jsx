import React from "react";

const Card = ({ post }) => {
  return (
    <div className="bg-slate-500 px-3 py-3 rounded-md opacity-80">
      <h3 className="font-medium   text-white text-xl mb-2">{post.title}</h3>
      <p className="text-gray-400">
        By <i className="text-white">{post.author}</i> on{" "}
        <strong className="text-white">{post.category}</strong>
      </p>
      <p className="capitalize ">{`posted on ${post.date}`}</p>
      <p className="mt-2 mb-2">{post.content}</p>
      <div className="text-blue-400 flex gap-3">
        {post.tags.map((tag) => {
          return <span>{` #${tag} `}</span>;
        })}
      </div>
    </div>
  );
};

export default Card;
