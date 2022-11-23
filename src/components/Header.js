import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
        <Navbar  variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/000/656/457/original/restaurant-badge-and-logo-good-for-print-vector.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{'     '}
            Cafe De Bale
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header