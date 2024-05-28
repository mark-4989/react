import React from "react";
import Button from "react-bootstrap/esm/Button";
// import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";

const Show = ({ todo, setTodo, setEdit }) => {
  //   const [todo, setTodo] = useState([]);
  const handleDelete = ({ id }) => {
    setTodo(todo.filter((todos) => todos.id !== id));
  };
  const handleEdit = ({ id }) => {
    const findTodo = todo.find((todos) => todos.id === id);
    setEdit(findTodo);
  };
  const handleDone = (todos) => {
    setTodo(
      todo.map((item) => {
        if (item.id === todos.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div>
      {" "}
      {todo.map((todos) => (
        <li key={todos.id + Math.random()}>
          <input
            type="text"
            className={`list ${todos.completed ? "complete" : ""}`}
            value={todos.title}
            onChange={(e) => {
              e.preventDefault();
            }}
          />{" "}
          <Button onClick={() => handleDone(todos)}> done </Button>{" "}
          <Button onClick={() => handleEdit(todos)}> edit </Button>{" "}
          <Button onClick={() => handleDelete(todos)}> delete </Button>{" "}
        </li>
      ))}{" "}
    </div>
  );
};
export default Show;
