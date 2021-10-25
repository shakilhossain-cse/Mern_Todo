import Button from "@restart/ui/esm/Button";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Todo from "../Todo/Todo";

const Todos = () => {
  return (
    <Container className="bg-light mt-5 w-50">
      <div className="d-flex justify-content-between p-3">
        <input
          type="text"
          className="form-control w-75"
          placeholder="type anythig for search ...."
        />
        <Button className="border-0 bg-transparent">
          <FaPlus />
        </Button>
      </div>
      <div className="p-3">
        <Todo />
      </div>
    </Container>
  );
};

export default Todos;
