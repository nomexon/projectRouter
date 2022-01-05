import React, { useEffect, useState } from "react";

import { getData } from "../../helpers/fetchData";
import { useHistory, useParams } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getPost() {
      const res = await getData("users", id, "нет пользователя");
      if (res === undefined) {
        setErr(true);
        setLoading(!loading);
      } else {
        setUser(res);
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
          <h2>Ошибка</h2>
          <button
            onClick={() => {
              history.push("/users");
            }}
          >
            Назад
          </button>
        </div>
      ) : (
        <div>
          {" "}
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
      )}
    </div>
  );
}
