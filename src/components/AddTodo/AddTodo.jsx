import Button from "@restart/ui/esm/Button";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const notifySuccess = () => toast.success("Added Your Task");
const notifyError = () => toast.error("This didn't work.");

const AddTodo = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Back To All Todos
    </Tooltip>
  );


  const history = useHistory()
  
  const onSubmit = task => {
    fetch("http://localhost:5000/addtodo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: task.title, description: task.description }),
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
  }

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
          <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="my-3">
              <label htmlFor="title">Title </label>
              <input
                id="title"
                type="text"
                className="form-control"
                placeholder="type anythig for search ...."
                {...register("title", { required: true})}
              />
               {errors.title && <span className="text-danger">This title field is required</span>}
            </div>

            <div className="my-3">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                className="form-control "
                placeholder="todo detiles ...."
                {...register("description", { required: true })}   
              ></textarea>
              {errors.description && <span className="text-danger">This description field is required</span>}
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
