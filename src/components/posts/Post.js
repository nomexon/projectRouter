import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { getData } from "../../helpers/fetchData";

export default function Post() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function getPost() {
      const res = await getData("posts", id, "нет поста");
      setPost(res);
      if (res.length === 0) {
        history.push("/posts");
      }
    }
    getPost();
  }, [id, history]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button
        onClick={() => {
          history.push("/posts");
        }}
      >
        Назад
      </button>
    </div>
  );
}
