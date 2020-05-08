import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Components/NavigationBar.css";

export function AdminBar() {
  return (
    <div className="nav-box">
      <Navbar fixed="top" className="d-flex" style={{ background: "#252934" }}>
        <Navbar.Brand className="">
          <Link to="/">
            <img
              alt=""
              src={require("../logo.png")}
              width="60"
              height="60"
              className="d-inline-block align-top logo"
            />
          </Link>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default AdminBar;
