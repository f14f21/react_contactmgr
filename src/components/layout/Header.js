import React from 'react';
import './main.css'
const Header = (props) => {
    return(
      <div className="navbar navbar-expand-sm navbar-dark bg-info p-0">
          <div className="container">
                <a href="/" className="navbar-brand">{props.Title}</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link"><i className="fa fa-home"></i> Home</a>
                    </li>

                    <li className="nav-item">
                        <a href="/customer" className="nav-link"><i className="fa fa-user pr-1"></i>Customer</a>
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