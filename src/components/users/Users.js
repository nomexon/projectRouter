import React, { useEffect, useState } from "react";
import List from "../list/List";
import { getData } from "../../helpers/fetchData";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getPost() {
      const res = await getData("users", "", "нет пользователей");
      setUsers(res);
    }
    getPost();
  }, []);
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
