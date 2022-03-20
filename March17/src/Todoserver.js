import { useState, useEffect } from "react";
import axios from "axios";
const TodoApp = () => {
  let [todos, setTodos] = useState([{ item: "", status: "" }]);
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = () => {
    axios
      .get("/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let addTodo = (event) => {
    event.preventDefault();
    let todoObject = {
      item: event.target.item.value,
      status: event.target.status.value,
    };
    axios
      .post("/todos", todoObject)
      .then((res) => {
        getTodos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteTodo = (indexToDelete) => {
    axios
      .delete("/todos/" + indexToDelete)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getTodos();
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type='text' name='item' />
        <select name='status'>
          <option value='complete'>complete</option>
          <option value='incomplete'>incomplete</option>
        </select>
        <button>add</button>
      </form>
      {todos.map((val, index) => {
        return (
          <div>
            status:{val.status}
            <br />
            todo:{val.item}
            <button onClick={() => deleteTodo(index)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoApp;
