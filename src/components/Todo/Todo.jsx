import React from "react";
import { Link } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import { FiTrash } from "react-icons/fi";
import Button from "@restart/ui/esm/Button";

const Todo = (props) => {
    const { _id, title } = props.task;
  return (
    <div className="d-flex justify-content-between bg-white mb-2 p-2">
      <p>{title}</p>
      <div className="ms-3">
        <Link
          style={{ height: "3rem", width: "3rem" }}
          className="bg-light p-3"
          to={`/task/${_id}`}
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
