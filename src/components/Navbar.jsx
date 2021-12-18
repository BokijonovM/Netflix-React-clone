import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Image, Row, Col, Container } from 'react-bootstrap'
import Section from './Section'
import brand from '../brand.png';
import user from '../user.png';

// ...later

class NavBar extends React.Component {
    state = {
        searchQuery: '',
        movieList: [],
        display:false
    }

    SearchStringHandler = (e) => {
        
        if(e===13){
            this.props.showSearchResult(this.state.searchQuery)
            return this.state.searchQuery
        } else {
            this.setState({searchQuery:e.target.value})
        }
      
    }

  

    render() {
        return (
            <div fixed>
                <Navbar bg="dark" variant="dark" expand="lg" >
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
                                    style={{display:this.state.display? "block":"none",borderRadius:"25px",height:"30px"}}
                                    onKeyDown={this.SearchStringHandler}
                                    onChange={this.SearchStringHandler}
                                    value={this.state.searchQuery}  />
                                <Nav.Link href="#features" onClick={()=>this.setState({display: !this.state.display})}><i className="bi bi-search"></i></Nav.Link>
                                <div className="d-flex align-items-center">
                                    <Nav.Link href="#features">KIDS</Nav.Link>
                                    <Nav.Link href="#bellIcon"><i className=" text-white bi bi-bell-fill"></i> </Nav.Link>
                                    <Nav.Link href="#pricing"><Image src={user} width="40px" /></Nav.Link>
                                </div>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Section title={this.state.searchQuery}/>
               
            </div>
        )
    }
}

export default NavBar;
