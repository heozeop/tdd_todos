import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import SeeMore from './components/SeeMore';

// import Todo from './components/Todo';

function RoutingList() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/todo">투두</Link>
        </li>
        <li>
          <Link to="/counter">카운터</Link>
        </li>
        <li>
          <Link to="/seemore">seemore</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/todo" component={TodoList} />
        <Route path="/counter" component={Counter} />
        <Route path="/seemore" component={SeeMore} />
        <Route
          render={({ location }) => (
            <div>
              <h2>Not Found 404</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default RoutingList;
