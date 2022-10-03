import React, { useState } from "react";
import { log } from "util";

export default {
  title: "ReactMemo demo",
};

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("render");
  return (
    <div>
      {props.users.map((el, i) => (
        <div key={i}>{el}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);
export const Example1 = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Dimych", "Valera", "Igor"]);

  const addUser = () => {
    setUsers([...users, "Masha"]);
  };

  users.push("Sveta");
  return (
    <>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        +
      </button>
      <button onClick={addUser}>add user</button>
      <NewMessagesCounter count={counter} />
      <Users users={users} />
    </>
  );
};
