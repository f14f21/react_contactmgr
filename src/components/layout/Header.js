import React from 'react';
import './main.css'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return(
      <div className="navbar navbar-expand-sm navbar-dark bg-info p-0">
          <div className="container">
                <a href="/" className="navbar-brand">{props.Title}</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><i className="fa fa-home"></i> Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacts/add" className="nav-link"><i className="fa fa-plus"></i> Add Contact</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/about" className="nav-link"><i className="fa fa-question"></i> About</Link>
                    </li>
                </ul>
          </div>
      </div>
    );
};

const headingStyle = {
    color: 'green',
    fontSize:'63px',
    fontWeight:'bold'
};

export default Header;