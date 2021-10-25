import React from "react";
import { FaPlus } from "react-icons/fa";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import Todo from "../Todo/Todo";
import { Link } from "react-router-dom";

const Todos = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Add Your Todo
    </Tooltip>
  );

  return (
    <Container className="bg-light mt-5 w-50">
      <div className="d-flex justify-content-between align-items-center p-3">
        <input
          type="text"
          className="form-control w-75"
          placeholder="type anythig for search ...."
        />
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Link className="text-black p-2 fs-3" to="/addtodo">
            <FaPlus />
          </Link>
        </OverlayTrigger>
        ,
      </div>
      <div className="p-3">
        <Todo />
      </div>
    </Container>
  );
};

export default Todos;
