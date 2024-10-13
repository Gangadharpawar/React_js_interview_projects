/*import { useState, useEffect } from "react";

const EffectComp = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status !== 404) {
          return response.json();
        } else {
          throw Error();
        }
      })
      .then((data) => setPosts(data))
      .catch((error) => setError(true));
  }, []);

  if (error === true) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      {posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
export default EffectComp;*/

import React, { useState, useEffect } from "react";

const EffectComp = () => {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(null);

  const fetchPostData = (postId) => {
    let response;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
    return response;
  };

  useEffect(() => {
    fetchPostData(postId);
  },[]);

  const setPostHandler = (e) => {
    setPostId(e.target.value);
  };

  const searchPostHandler = () => {
    fetchPostData(postId);
  };

  return (
    <div>
      {post !== null ? <p>{post.title}</p> : <p>No post found</p>}

      <input type="text" name="post" value={postId} onChange={setPostHandler} />

      <button onClick={searchPostHandler}>Search Value</button>
    </div>
  );
};
export default EffectComp;
