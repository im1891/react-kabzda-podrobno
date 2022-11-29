import React, {useCallback, useMemo, useState} from "react";

export default {
  title: "useMemo",
};

export const DifficultCounting = () => {
  const [a, setA] = useState(5);
  const [b, setB] = useState(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let currentResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        const fakeValue = Math.random();
      }
      currentResultA = currentResultA * i;
    }
    return currentResultA;
  }, [a]);

  for (let j = 1; j <= b; j++) {
    resultB = resultB * j;
  }
  return (
    <div>
      <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
      <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </div>
  );
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("render UsersSecret");
  return (
    <div>
      {props.users.map((user, i) => (
        <div key={i}>{user}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Dimych", "Valera", "Igor"]);
  console.log("render HelpsToReactMemo");

  const newUsers = useMemo(() => {
    return users.filter((u) => u.toLowerCase().indexOf("a") > -1);
  }, [users]);

  const addUser = () => {
    setUsers([...users, "Masha"]);
  };
  return (
    <>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        +
      </button>
      <button onClick={addUser}>add user</button>
      {counter}
      <Users users={newUsers} />
    </>
  );
};

export const LikeUseCallback = () => {
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(["React", "JS", "Redux"]);
  console.log("render likeUseCallback");

  const addBook = () => {
    setBooks([...books, "Masha"]);
  };

  const memoizedAddBook= useMemo(() => {
    return addBook
  }, [books])

  const memoizedAddBook2= useCallback(addBook, [books])
  return (
      <>
        <button onClick={() => setCounter((prevState) => prevState + 1)}>
          +
        </button>

        {counter}
        <Books  addBook={memoizedAddBook2} />
      </>
  );
};

const BooksSecret = (props: { addBook: () => void }) => {
  console.log("render Books");
  return (
      <div>
        <button onClick={props.addBook}>add book</button>
      </div>
  );
};

const Books = React.memo(BooksSecret);