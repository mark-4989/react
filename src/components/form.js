import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
//import axios from "axios";
//import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Forms = ({ input, setInput, todo, setTodo, edit, setEdit }) => {
  //   const [input, setInput] = useState({ Title: "" });
  //   const [todo, setTodo] = useState([]);
  const updatetodo = (title, id, completed) => {
    const newTodo = todo.map((todos) =>
      todos.id === id ? { title, id, completed } : todos
    );
    setTodo(newTodo);
  };
  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);
  const handleChanges = (e) => {
    setInput(e.target.value);
  };

  const handleSubmits = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updatetodo(input, edit.id, edit.completed);
    }

    //axios.post("uuidv4", { Title: input });
    //     .then((res) => {
    //         toast.success("Task added successfully", {
    //             position: toast.POSITION.BOTTOM_CENTER,
    //             autoClose: 3000,
    //         });
    //     })
    //     .catch((err) => {
    //         toast.error("Error occurred", {
    //             position: toast.POSITION.BOTTOM_CENTER,
    //             autoClose: 3000,
    //         });
    //     });
  };

  return (
    <Form onSubmit={handleSubmits}>
      <Form.Control
        name="list"
        type="text"
        value={input}
        id="inputPassword5"
        onChange={handleChanges}
        required
      />{" "}
      <Button variant="secondary" type="submit">
        {" "}
        {edit ? "OK" : "ADD"}{" "}
      </Button>{" "}
    </Form>
  );
};

export default Forms;
