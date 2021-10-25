import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route path="/addtodo" component={AddTodo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
