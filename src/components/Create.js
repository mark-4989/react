import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/blogs", data)
      .then((res) => {
        toast.success("New blog added successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      })
      .catch((err) => {
        toast.error("An error occurred while adding another blog", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlled="exampleForm.ControlInput1">
          <Form.Label> Title </Form.Label>{" "}
          <Form.Control
            name="title"
            type="text"
            onChange={handleChange}
            placeholder="Enter the title"
            required
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlled="exampleForm.ControlInput1">
          <Form.Label> Author </Form.Label>{" "}
          <Form.Control
            name="author"
            type="text"
            onChange={handleChange}
            placeholder="Enter the author's name"
            required
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlled="exampleForm.ControlTextarea1">
          <Form.Label> Body </Form.Label>{" "}
          <Form.Control
            as="textarea"
            onChange={handleChange}
            name="body"
            placeholder="Enter the body"
            required
          />
        </Form.Group>{" "}
        <Button variant="primary" type="submit">
          {" "}
          Save Blog{" "}
        </Button>{" "}
        <ToastContainer />
      </form>{" "}
    </div>
  );
};

export default Create;
