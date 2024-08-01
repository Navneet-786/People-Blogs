import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import "./BlogPost.css";
import Spinner from "./Spinner";
import Card from "./Card";
const BlogPosts = () => {
  const { loading, setLoading, posts } = useContext(AppContext);
  return (
    <div className="relative w-full flex justify-center  pt-20 items-center h-full">
      {loading ? (
        <Spinner />
      ) : posts.length == 0 ? (
        <div>
          <p className="text-4xl text-white capitalize">No posts available</p>
        </div>
      ) : (
        <div className=" w-1/2 text-white flex flex-col gap-10 ">
          {posts.map((post) => (
            <Card post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
