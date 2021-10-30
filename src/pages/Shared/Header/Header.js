import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        className="mainNav"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand to="/home" className="fs-1 fw-bolder brandLogo">
            GARLAND
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end text-center">
            <Nav.Link className="navItem" as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link className="navItem" as={HashLink} to="/home#offers">
              Offers
            </Nav.Link>
            <Nav.Link className="navItem me-1" as={HashLink} to="/home#sports">
              Sports
            </Nav.Link>
            <Link className="navItem me-3" to="/gallery">
              Gallery
            </Link>

            {user.email ? (
              <Button onClick={logOut} variant="light" className="mx-2 fw-bold">
                Logout
              </Button>
            ) : (
              <Link className="navItem me-2" to="/login">
                LogIn
              </Link>
            )}

            <Navbar.Text className="text-black d-flex align-items-center justify-content-center">
              <a href="#login">
                {user?.displayName}{" "}
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="img-fluid w-25 rounded-circle ms-2"
                />
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

/* 
   {user.email ? (
              <Button onClick={logOut} variant="light" className="mx-2">
                Logout
              </Button>
            ) : (
              <Link className="navItem me-2" to="/login">
                LogIn
              </Link>
            )}



---------------------
   <Navbar.Text className="text-black d-flex align-items-center justify-content-center">
              <a href="#login">
                {user?.displayName}{" "}
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="img-fluid w-25 rounded-circle ms-2"
                />
              </a>
            </Navbar.Text>
*/
export default Header;
