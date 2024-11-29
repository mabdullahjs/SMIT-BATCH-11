import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const title = useRef();
  const description = useRef();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios("http://localhost:3000/api/v1/todos")
      .then((res) => {
        console.log(res.data.todos);
        setData(res.data.todos);
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
      const response = await axios.post("http://localhost:3000/api/v1/todo", {
        title: title.current.value,
        description: description.current.value,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/todo/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (id) => {
    const title = prompt("update title value");
    try {
      const edit = await axios.put(`http://localhost:3000/api/v1/todo/${id}`, {
        title,
      });
      console.log(edit);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="enter title" ref={title} />
        <input type="text" placeholder="enter description" ref={description} />
        <button type="submit">add User</button>
      </form>
      {loading && <h1>Loading...</h1>}
      {error && <h1>error occured</h1>}
      {data ? (
        data.map((item) => {
          return (
            <div
              key={item._id}
              style={{
                border: "1px solid black",
                padding: "20px",
                borderRadius: "20px",
                margin: "20px",
              }}
            >
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button onClick={() => deleteUser(item._id)}>delete</button>
              <button onClick={() => editUser(item._id)}>Edit</button>
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
