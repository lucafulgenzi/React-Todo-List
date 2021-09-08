import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: FC = () => {

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 px-4 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none ">
        <span className="fs-4">TODO LIST</span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item m-1"><NavLink exact to='/' className="nav-link" activeClassName="active">List</NavLink></li>
        <li className="nav-item m-1"><NavLink exact to='/add' className="nav-link" activeClassName="active">Add</NavLink></li>
      </ul>
    </header>
  );
};

