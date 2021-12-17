
import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'


class NavBar extends React.Component {
    render() { 
        return (
        <div>
             <Navbar className='MyNavBar' bg="dark" variant="dark">
                    <Navbar.Brand href="#home"> <img src='/react-netflix/public/assets/netflix_logo.png' alt="netflix logo"/> </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">TV Show</Nav.Link>
                        <Nav.Link href="#pricing">Movies</Nav.Link>
                        <Nav.Link href="#pricing">Recently Added</Nav.Link>
                        <Nav.Link href="#pricing">My List</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">TV Show</Nav.Link>
                        <Nav.Link href="#pricing">Movies</Nav.Link>
                        <Nav.Link href="#pricing">Recently Added</Nav.Link>
                        <Nav.Link href="#pricing">My List</Nav.Link>
                    </Nav>
                </Navbar>
               
        </div>
)    
}
}
 
export default NavBar;
