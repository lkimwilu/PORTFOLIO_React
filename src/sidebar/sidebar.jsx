import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { routes } from '../utils/routes';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <SimpleBar className="sidebar-content">
        <ul className="sidebar-list">
          {routes.map(route => (
            <li key={route.id} className="sidebar-list-item">
              <Link to={route.route} className="sidebar-link">
                <route.icon className="sidebar-icon" style={{ color: route.color }} />
                <span className="sidebar-title">{route.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
