import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Counter from './components/Counter';

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
      </ul>
      <Switch>
        <Route path="/counter" component={Counter} />
        {/* <Route path="/todo" component={Todo} />
        <Route path="/counter" component={Counter} /> */}
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
  )
}

export default RoutingList;
