import Button from "@restart/ui/esm/Button";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddTodo = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Back To All Todos
    </Tooltip>
  );
  return (
    <div>
      <Container className="bg-light mt-5 w-50">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="p-3 ">Add New Todo</h3>

          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Link className="text-black fs-2 p-2" to="/">
              <AiOutlineArrowLeft />
            </Link>
          </OverlayTrigger>
        </div>
        <div className="p-3">
          <div className="my-3">
            <label htmlFor="title">Title </label>
            <input
              id="title"
              type="text"
              className="form-control"
              placeholder="type anythig for search ...."
            />
          </div>

          <div className="my-3">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-control "
              placeholder="todo detiles ...."
            ></textarea>
          </div>
          <Button className="w-100 btn btn-outline-dark">Add Todo</Button>
        </div>
      </Container>
    </div>
  );
};

export default AddTodo;
