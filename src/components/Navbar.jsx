import { Component } from "react";
import { Navbar, Nav, Button, FormControl, Image } from "react-bootstrap";
import brand from "../brand.png";
import user from "../user.png";
class NavBar extends Component {
  state = {
    searchString: "",
    display: false,
  };

  searchHandler = e => {
    if (e.keyCode === 13) {
      this.props.showSearchResult(this.state.searchString);
    } else {
      this.setState({ searchString: e.currentTarget.value });
    }
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
            <Nav.Link active className="font-weight-bold" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="font-weight-bold" href="/tv-shows">
              TV Shows
            </Nav.Link>
            <Nav.Link className="font-weight-bold" href="/">
              {" "}
              Movies{" "}
            </Nav.Link>
            <Nav.Link className="font-weight-bold" href="/">
              Recently Added
            </Nav.Link>
            <Nav.Link className="font-weight-bold" href="/">
              My List
            </Nav.Link>
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
              onKeyDown={this.searchHandler}
              onChange={this.searchHandler}
              value={this.state.searchString}
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

export default NavBar;
