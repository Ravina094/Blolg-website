import React from "react";
import { useParams } from "react-router-dom";

const OnePost = () => {
  const { id } = useParams();

  // Sample data (replace with your data fetching logic)
  const post = {
    1: { title: "First Post", content: "This is the first post content." },
    2: { title: "Second Post", content: "This is the second post content." },
  }[id];

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default OnePost;
