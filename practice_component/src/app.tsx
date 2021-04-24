import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Comments from './pages/comments';

const App = () => {
  return (
    <>
      <Router>
        <Link to="/comments">댓글 컴포넌트</Link>
        <Switch>
          <Route path="/comments" render={Comments} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
