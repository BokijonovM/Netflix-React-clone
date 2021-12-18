import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Image, Row, Col, Container } from 'react-bootstrap'
import DisplayMovies from '../components/DisplayMovies'
import brand from '../brand.png';
import user from '../user.png';

// ...later

class NavBar extends React.Component {
    state = {
        searchQuery: '',
        movieList: []
    }

    performSearch = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch("http://www.omdbapi.com/?apikey=82ebb69a&s=" + this.state.searchQuery, {
                method: "GET"
            })
            let data = await response.json()
            this.setState({ movieList: data })
            console.log(data)


        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg" fixed>
                    <Navbar.Brand href=""><Image src={brand} style={{ width: "100px" }} fluid /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">TV Show</Nav.Link>
                            <Nav.Link href="#movies">Movies</Nav.Link>
                            <Nav.Link href="#recentlyAdded">Recently Added</Nav.Link>
                            <Nav.Link href="#myList">My List</Nav.Link>
                        </Nav>

                        <Nav className="d-flex align-items-center">
                            <Form inline className="text-center">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2"
                                    value={this.state.searchQuery}
                                    onChange={(e) => this.setState({ searchQuery: e.target.value })} />
                                <Nav.Link href="#features" onClick={this.performSearch}><i className="bi bi-search"></i></Nav.Link>
                                <div className="d-flex align-items-center">
                                    <Nav.Link href="#features">KIDS</Nav.Link>
                                    <Nav.Link href="#bellIcon"><i className=" text-white bi bi-bell-fill"></i> </Nav.Link>
                                    <Nav.Link href="#pricing"><Image src={user} width="40px" /></Nav.Link>
                                </div>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
               <Container>
                   <Row>
                       <Col>
                       <DisplayMovies movieList={this.state.movieList} />
                       </Col>
                   </Row>
               </Container>
            </div>
        )
    }
}

export default NavBar;
