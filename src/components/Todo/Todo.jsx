import React from "react";
import { Link } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import { FiTrash } from "react-icons/fi";
import Button from "@restart/ui/esm/Button";

const Todo = () => {
  return (
    <div className="d-flex justify-content-between bg-white p-2">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus</p>
      <div className="ms-3">
        <Link
          style={{ height: "3rem", width: "3rem" }}
          className="bg-light p-3"
        >
          <GrEdit />
        </Link>
        <Button className="border-0 bg-light p-3 ms-2">
          <FiTrash />
        </Button>
      </div>
    </div>
  );
};

export default Todo;
