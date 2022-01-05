import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { getData } from "../../helpers/fetchData";

export default function Post() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getPost() {
      const res = await getData("posts", id, "нет поста");

      if (res === undefined) {
        setErr(true);
        setLoading(!loading);
      } else {
        setPost(res);
        setLoading(!loading);
      }
    }
    getPost();
  }, [id, history]);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {err ? (
        <div>
          {" "}
          <h2>Ошибка</h2>
          <button
            onClick={() => {
              history.push("/posts");
            }}
          >
            Назад
          </button>
        </div>
      ) : (
        <div>
          {" "}
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
      )}
    </div>
  );
}
