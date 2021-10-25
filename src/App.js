import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store/store';
import Home from './Pages';
import AddTodoPage from './Pages/AddTodoPage';
import TodoListPage from './Pages/TodoListPage';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-todo" exact component={AddTodoPage} />
          <Route path="/todo-list" exact component={TodoListPage} />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;