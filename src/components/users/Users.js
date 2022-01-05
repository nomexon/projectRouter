import React, { useEffect, useState } from "react";
import List from "../list/List";
import { getData } from "../../helpers/fetchData";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  useEffect(() => {
    async function getPost() {
      const res = await getData("users", "", "нет пользователей");
      if (res === undefined) {
        setErr(true);
        setLoading(!loading);
      } else {
        setUsers(res);
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
    <ul>
      {users.map((item) => {
        return (
          <List url="users" key={item.id} id={item.id} title={item.name}></List>
        );
      })}
    </ul>
  );
}
