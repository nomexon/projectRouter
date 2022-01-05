import React, { useEffect, useState } from "react";
import List from "../list/List";

import { getData } from "../../helpers/fetchData";
export default function Posts() {
  const [posts, setposts] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getPost() {
      const res = await getData("posts", "", "нет постов");

      if (res === undefined) {
        setErr(true);
        setLoading(!loading);
      } else {
        setposts(res);
        setLoading(!loading);
      }
    }
    getPost();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (err) {
    return <h2>Ошибка</h2>;
  }
  return (
    <div>
      <h1>Посты</h1>

      <ul>
        {Array.isArray(posts)
          ? posts.map((item) => {
              return (
                <List
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  url={"posts"}
                ></List>
              );
            })
          : "Loading..."}
      </ul>
    </div>
  );
}
