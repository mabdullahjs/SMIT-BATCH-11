import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const title = useRef();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios("http://localhost:3000/users")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addTodo = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/user", {
        title: title.current.value,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/user/${id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="enter title" ref={title} />
        <button type="submit">add User</button>
      </form>
      {loading && <h1>Loading...</h1>}
      {error && <h1>error occured</h1>}
      {data ? (
        data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <button onClick={() => deleteUser(item.id)}>delete</button>
            </div>
          );
        })
      ) : (
        <h1>No data found</h1>
      )}
    </>
  );
};

export default App;
