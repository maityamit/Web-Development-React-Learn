import React from 'react';

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Maity Cart
          </a>
          
        </div>
      </nav>
    );
  }
}

export default Navbar;
