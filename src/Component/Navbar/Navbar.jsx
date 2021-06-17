import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row navbar">
          <div className="col-md-12">
            <h4 className="navbar-text sizes">Sizes:</h4>
            <p className="navbar-text found">16 Product(s) found</p>
            <p className="navbar-text order">Order by</p>
            <form className="navbar-text navbar-right text-end">
              <label for="select"></label>
              <select name="Select" id="Select">
                <option value="select">Select </option>
              </select>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
