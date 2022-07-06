import { Component } from "react";
import { Navbar, Nav, Button, FormControl, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import brand from "../brand.png";
import withRouter from "../helper/withRouter";
import user from "../user.png";
class NavBar extends Component {
  state = {
    searchString: "",
    display: false,
  };

  searchHandler = e => {
    
      this.props.setSearch(e.target.value)
    
  };

  render() {

    return (

      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "black", position:'sticky', top:"0", zIndex:"3" }}>
        <Navbar.Brand href="/">
          <Image src={brand} style={{ width: "100px" }} fluid />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
            <div className={`nav-link font-weight-bold ${window.location.pathname === "/"? "active":""}`} >
              Home
            </div>
            </Link>
            <Link to="/tv-shows">
            <div   className={`nav-link font-weight-bold ${window.location.pathname === "/tv-shows"? "active":""}`} >
              TV Shows
            </div>
            </Link>
            <Link to="/movies">
            <div  className={`nav-link font-weight-bold ${window.location.pathname === "/movies"? "active":""}`}>
              Movies
            </div>
            </Link>
            <Link to="/recently-added">

            <div className={`nav-link font-weight-bold ${window.location.pathname === "/recently-added"? "active":""}`}>
              Recently Added
            </div>
            </Link>
            <Link to="my-lists">
            <div className={`nav-link font-weight-bold ${window.location.pathname === "/my-list"? "active":""}`}>
              My List
            </div>
            </Link>
          </Nav>
          <span className="d-flex align-items-center">
            <FormControl
              placeholder="Search and press enter"
              aria-label="search"
              aria-describedby="basic-addon1"
              style={{
                display: this.state.display ? "block" : "none",
                borderRadius: "25px",
                height: "30px",
              }}
              
              onChange={this.searchHandler}
              value={this.props.search}
            />
            <Nav.Link
              href="#features"
              onClick={() => this.setState({ display: !this.state.display })}
            >
              <i className="text-white bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="#features" className="text-white">
              KIDS
            </Nav.Link>
            <Nav.Link href="#bellIcon">
              <i className=" text-white bi bi-bell-fill"></i>{" "}
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Image src={user} width="40px" />
            </Nav.Link>
          </span>
          <a href="/register">
            <Button className="shadow-none border-0" variant="primary">
              LOG IN
            </Button>
          </a>
          <a href="/new">
            <Button className="shadow-none border-0 ml-2" variant="primary">
              Add Movie
            </Button>
          </a>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
