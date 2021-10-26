import React from "react";
import { Link } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import { FiTrash } from "react-icons/fi";
import Button from "@restart/ui/esm/Button";
import toast from "react-hot-toast";

const Todo = (props) => {
  const { _id, title} = props.task;

  const notifySuccess = () => toast.success("Delete Your Task");
  const deleteHandeler = (id) => {
    fetch(`http://localhost:5000/deletetask/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        props.deleteHandelerFromUi(id)
          notifySuccess();
        }
      });
  };

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
        <Button
          className="border-0 bg-light p-3 ms-2"
          onClick={() => deleteHandeler(_id)}
        >
          <FiTrash />
        </Button>
      </div>
    </div>
  );
};

export default Todo;
