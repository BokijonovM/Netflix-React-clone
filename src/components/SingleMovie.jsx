import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

const SingleMovie = ({ data, changeSelectedMovie }) => {
  const navigate = useNavigate();

  return (
    <Col className="mb-2" key={data.imdbID}>
      <img
        className="img-fluid"
        src={data.Poster}
        alt="movie"
        onClick={() => {
          changeSelectedMovie(data.imdbID);
        }}
      />
      <Button onClick={() => navigate("/details/" + data.imdbID)}>
        Movie Details
      </Button>
    </Col>
  );
};

export default SingleMovie;