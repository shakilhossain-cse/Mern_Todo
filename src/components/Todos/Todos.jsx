import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Todo from "../Todo/Todo";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./Todos.css";



const Todos = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add Your Todo
    </Tooltip>
  );
  const [GetAllTask, setGetAllTask] = useState([]);
  const [DisplayTask, setDisplayTask] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alltodos")
      .then((res) => res.json())
      .then((data) => {
        setGetAllTask(data);
        setDisplayTask(data);
      });
  }, []);
  const searcHandeler = (e) => {
    const inputValue = e.target.value;
    const Tasks = GetAllTask.filter((task) =>
      task.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setDisplayTask(Tasks);
  };






  
const deleteHandelerFromUi = item => {
    const removeItem = DisplayTask.filter(Task => Task._id != item)
  setDisplayTask(removeItem);
};
  return (
    <Row>
      <Col xs="12" sm="12" md="6" className="mx-auto">
        <Container className="bg-light mt-5">
          <div className="d-flex justify-content-between align-items-center p-3">
            <input
              onChange={searcHandeler}
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
          <small className="text-muted ms-3">
            Total Task Found {DisplayTask.length}
          </small>
          <div className="p-3">
            {DisplayTask.map((task) => (
              <Todo
                key={task._id}
                task={task}
                deleteHandelerFromUi={deleteHandelerFromUi}
              />
            ))}
          </div>
          <Toaster />
        </Container>
      </Col>
    </Row>
  );
};

export default Todos;
