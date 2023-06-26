import React from "react";
import { GetStaticPaths } from "next";
import { getAllPostIds } from "../lib/post";

const Post = () => {
  return <div>Post</div>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  // [{params: {id: 'pre-rendering'}, {}...}]
  return {
    paths,
    fallback: false,
  };
};
