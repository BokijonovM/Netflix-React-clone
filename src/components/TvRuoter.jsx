import { Component } from "react";
import { Container, Alert, Dropdown, Row, Col } from "react-bootstrap";
import MyFooter from "./MyFooter";
import MovieList from "./MovieList";
// import CommentArea from "./CommentArea";

class TvRouter extends Component {
  state = {
    gallery: [],
    searchString: "",
    loading: true,
    error: false,
    selectedMovie: null,
  };

  OMDB_URL = "https://www.omdbapi.com/?apikey=24ad60e9";

  componentDidMount = () => {
    this.fetchMovies();
  };

  fetchMovies = () => {
    fetch(this.OMDB_URL + "&s=lost&type=series")
      .then((response) => response.json())
      .then((responseObject) => {
        if (responseObject.Response === "True") {
          this.setState({ gallery: responseObject.Search });
        } else {
          this.setState({ error: true });
        }
      })
      .then(() => this.setState({ loading: false }))
      .catch((err) => {
        this.setState({ error: true });
        console.log("An error has occurred:", err);
      });
  };

  showSearchResult = async (searchString) => {
    this.setState({ searchString });
  };

  render() {
    return (
      <div>
        <Container fluid className="px-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="mb-4">TV Shows</h2>
              <div className="ml-4 mt-1">
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ backgroundColor: "#221f1f" }}
                    id="dropdownMenuButton"
                    className="btn-secondary btn-sm dropdown-toggle rounded-0"
                  >
                    Genres
                  </Dropdown.Toggle>
                  <Dropdown.Menu bg="dark">
                    <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div>
              <i className="fa fa-th-large icons"></i>
              <i className="fa fa-th icons"></i>
            </div>
          </div>
          <Row>
            <Col md={8}>
              {this.state.error && (
                <Alert variant="danger" className="text-center">
                  An error has occurred, please try again!
                </Alert>
              )}
              {this.state.searchString.length > 0 && (
                <MovieList
                  title="Search results"
                  searchString={this.state.searchString}
                  changeSelectedMovie={(movieId) =>
                    this.setState({
                      selectedMovie: movieId,
                    })
                  }
                />
              )}
              {!this.state.error && !this.state.searchString > 0 && (
                <>
                  <MovieList
                    title="Harry Potter"
                    loading={this.state.loading}
                    movies={this.state.gallery.slice(0, 6)}
                    changeSelectedMovie={(movieId) =>
                      this.setState({
                        selectedMovie: movieId,
                      })
                    }
                  />
                </>
              )}
            </Col>
            <Col md={4}>
              {/* <CommentArea movieId={this.state.selectedMovie} /> */}
            </Col>
          </Row>
          <MyFooter />
        </Container>
      </div>
    );
  }
}

export default TvRouter;