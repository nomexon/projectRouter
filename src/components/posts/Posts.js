import React, { useEffect, useState } from "react";
import List from "../list/List";

import { getData } from "../../helpers/fetchData";
export default function Posts() {
  const [posts, setposts] = useState("");

  useEffect(() => {
    async function getPost() {
      const res = await getData("posts", "", "нет постов");
      setposts(res);
    }
    getPost();
  }, []);
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
