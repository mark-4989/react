import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Header";
import Forms from "./components/form";
import Show from "./components/list";
import { useState, useEffect } from "react";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(initialState);
  const [edit, setEdit] = useState(null);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <div className="App">
      <NavBar />
      <Forms
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        edit={edit}
        setEdit={setEdit}
      />{" "}
      <Show todo={todo} setTodo={setTodo} edit={edit} setEdit={setEdit} />{" "}
    </div>
  );
}

export default App;
