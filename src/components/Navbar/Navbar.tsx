import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

const Navigation = () => {
  const pathname = window.location.pathname
  console.log(pathname)
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className = {pathname == '/' || pathname=='/userList' ? 'active':''} href="/">UserList</Nav.Link>
          {/* <Nav.Link href="/user">AddUser</Nav.Link> */}
          <Nav.Link className = { pathname=='/userForm' ? 'active':''}  href="/userForm" >User form</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

