import Button from "@restart/ui/esm/Button";
import React, { useRef } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import toast from "react-hot-toast";

const notifySuccess = () => toast.success("Added Your Task");
const notifyError = () => toast.error("This didn't work.");

const AddTodo = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Back To All Todos
    </Tooltip>
  );
  const titleRef = useRef("");
  const descriptionRef = useRef("");

    const history = useHistory()
  const submitHandeler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    fetch("http://localhost:5000/addtodo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, description: description }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
            history.push('/')
          notifySuccess();
        } else {
          notifyError();
        }
      });
  };
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
          <form onSubmit={submitHandeler}>
            <div className="my-3">
              <label htmlFor="title">Title </label>
              <input
                id="title"
                type="text"
                className="form-control"
                placeholder="type anythig for search ...."
                ref={titleRef}
              />
            </div>

            <div className="my-3">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                className="form-control "
                placeholder="todo detiles ...."
                ref={descriptionRef}
              ></textarea>
            </div>
            <Button className="w-100 btn btn-outline-dark" type="submit">
              Add Todo
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddTodo;
