import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleOwnMovie({ film }) {
  return (
    <div>
      <Link to={"/detailsOwn/" + film.imdbID}>
        <Card.Img
          style={{ height: "300px", width: "205px" }}
          className="img-poster align-self-center mb-2"
          variant="top"
          src={film.Poster}
        />
      </Link>
    </div>
  );
}

export default SingleOwnMovie;
