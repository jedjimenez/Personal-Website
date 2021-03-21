import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #F7F7FF;
    font-family: Karla;
    font-weight: 600;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #4692DF;
    &:hover {
      color: #BDD5EA;
    }
  }

  @media only screen and (max-width: 768px) {

    navbar {margin: 2.2rem 2rem}
  }
  
`;


class NavBar extends Component {
  render() {
    return (
      <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
        <img 
            src="https://i.pinimg.com/originals/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg"
            alt="flag"
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
        into the void
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link>
              <Link to="/projects">Projects</Link>
            </Nav.Link>
          </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
    );
  }
}

export default NavBar;