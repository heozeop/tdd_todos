import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
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
        <Route path="/todo" component={Todo} />
        <Route path="/counter" component={Counter} />
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

export default App;