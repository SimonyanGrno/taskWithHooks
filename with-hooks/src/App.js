import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './container/Home';
import Posts from './container/Posts';
import { PostsContextProvider } from './contexts/postsContext';

const App = () => (
  <Router>
    <div className="container">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/posts">
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/albums">
            Albums
          </Link>
        </li>
      </ul>
    </div>

    <Switch>
      <Route exact path="/" component={Home} />
      <PostsContextProvider>
        <Route path="/posts" component={Posts} />
      </PostsContextProvider>
      {/* <Route path="/albums" component={Home} /> */}
    </Switch>
  </Router>
);

export default App;
