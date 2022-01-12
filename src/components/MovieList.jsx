import { Component } from "react";
import { Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class MovieList extends Component {
  OMDB_URL = "http://www.omdbapi.com/?apikey=24ad60e9";

  state = {
    searchResults: [],
    error: false,
  };

  fetchSearchResult = async () => {
    try {
      const response = await fetch(
        this.OMDB_URL + "&s=" + this.props.searchString
      );
      if (response.ok) {
        const data = await response.json();
        if (data.Response === "True") {
          this.setState({ searchResults: data.Search, error: false });
        } else {
          this.setState({ error: true });
        }
      } else {
        this.setState({ error: true });
        console.log("an error occurred");
      }
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  componentDidMount = async () => {
    if (this.props.searchString) {
      this.fetchSearchResult();
    }
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.searchString !== this.props.searchString) {
      if (this.props.searchString === "") {
        this.setState({ error: false, searchResults: [] });
      } else {
        this.fetchSearchResult();
      }
    }
  };

  render() {
    return (
      <>
        <h4>{this.props.title}</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 text-center">
          {this.props.loading
            ? [...Array(6).keys()].map((movie) => (
                <div className="spinner-container" key={movie}>
                  <Spinner animation="border" variant="light" />
                </div>
              ))
            : this.props.movies &&
              this.props.movies.map((movie) => (
                <SingleMovie
                  data={movie}
                  key={movie.imdbID}
                  changeSelectedMovie={(movieId) =>
                    this.props.changeSelectedMovie(movieId)
                  }
                />
              ))}
          {this.state.searchResults.map((movie) => (
            <SingleMovie
              data={movie}
              key={movie.imdbID}
              changeSelectedMovie={(movieId) =>
                this.props.changeSelectedMovie(movieId)
              }
            />
          ))}
        </Row>
      </>
    );
  }
}

export default MovieList;