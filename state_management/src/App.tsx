import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Redux from './redux';
import Recoil from './recoil';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/redux">redux</Link>
        </li>
        <li>
          <Link to="/recoil">recoil</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/redux" component={Redux} />
        <Route path="/recoil" component={Recoil} />
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