import React from "react";
import CardSearch from "./CardSearch";

class DisplayMovies extends React.Component {
  render() {
    return (
      <>
        {this.props.movieList.map(movie => (
          <CardSearch key={movie.imdbID} movie={movie}></CardSearch>
        ))}
      </>
    );
  }
}

export default DisplayMovies;
