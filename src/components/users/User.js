import React, { useEffect, useState } from "react";

import { getData } from "../../helpers/fetchData";
import { useHistory, useParams } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function getPost() {
      const res = await getData("users", id, "нет пользователя");
      setUser(res);

      if (res.length === 0) {
        history.push("/users");
      }
    }
    getPost();
  }, [id, history]);
  return (
    <div>
      <h2>Пользователь:{user.name}</h2>
      <p>Сайт: {user.website}</p>
      <p>Телефон: {user.phone}</p>
      <button
        onClick={() => {
          history.push("/users");
        }}
      >
        Назад
      </button>
    </div>
  );
}
