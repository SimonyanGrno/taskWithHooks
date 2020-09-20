import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <h3 className="text-muted">Menu</h3>

    <ul className="nav flex-column">
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
  </>
);

export default Home;
