import { BrowserRouter as Router, Switch  , Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Todos}/>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
