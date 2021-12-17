
import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, Button, Image} from 'react-bootstrap'


class NavBar extends React.Component {
    state = {
        searchQuery:'',
        moviesArr:[]
    }

   performSearch = async(e) =>{
        e.preventDefault()
        try {
            let response = await fetch("http://www.omdbapi.com/?apikey=82ebb69a&s=" + this.state.searchQuery,{
                method:"GET"
            })
            let data = await response.json()
            this.setState({moviesArr:data})
            console.log(data)
            
        } catch (error) {
            console.log(error)
        }
    }

    render() { 
        return (
        <div>
                                <Navbar  bg="dark" variant="dark" expand="lg">
                                        <Navbar.Brand href="/public/assets/netflix_logo.png"> <Image src="holder.js/100px250" fluid /></Navbar.Brand>
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

                                        <Form inline>
                                                <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                                                value = {this.state.searchQuery}
                                                onChange={(e) => this.setState({searchQuery:e.target.value}) } />
                                                    <Nav.Link href="#features" onClick={this.performSearch}><i class="bi bi-search"></i></Nav.Link>
                                                <Nav className="mr-auto">
                                                    <Nav.Link href="#features">KIDS</Nav.Link>
                                                    <Nav.Link href="#bellIcon"><i  className = " text-white bi bi-bell-fill"></i> </Nav.Link>
                                                    <Nav.Link href="#pricing"><img src='/react-netflix/public/assets/kids_icon.png'/></Nav.Link>
                                                </Nav>
                                         </Form>
                                    </Navbar.Collapse>
                              </Navbar>
                              
               
        </div>
)    
}
}
 
export default NavBar;
