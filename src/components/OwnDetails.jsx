import { Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AddMovieComment from "./AddMovieComment";
import NewReview from "./NewReview";

const OwnDetails = () => {
  const params = useParams();
  // params is ALWAYS going to be an object!
  console.log("PARAMS!!", typeof params.movieID);

  const [film, setFilm] = useState([]);
  const [comment, setComment] = useState([]);
  const [ownMovie, setOwnMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let movieRes = await fetch(
          process.env.REACT_APP_OWN_MOVIE + "movies/" + params.movieID
        );
        console.log(movieRes);

        if (movieRes.ok) {
          let movies = await movieRes.json();
          console.log(movies);
          console.log("Own Details");
          setFilm(movies);
        } else {
          console.log("Sorry movie error");
        }
      } catch (err) {
        // console.log(err)
      }
    };
    const fetchComment = async () => {
      try {
        // e.preventDefault()
        let response = await fetch(
          process.env.REACT_APP_OWN_MOVIE +
            "movies/" +
            params.movieID +
            "/review"
        );
        if (response.ok) {
          let data = await response.json();
          console.log("comment", data);
          setComment(data);
        } else {
          console.log("Sorry comment error");
        }
      } catch (err) {
        console.log(err);
      }
    };
    // const fetchOwnMovie = async () => {
    //     let res = await fetch(process.env.REACT_APP_OWN_MOVIE)
    // }
    fetchMovie();
    fetchComment();
  }, [params.movieID]);

  return (
    <div>
      <Container>
        <Row sm={1} md={1} lg={2}>
          <Col>
            {typeof film === "undefined" ? (
              <h1>404 - Movie NOT FOUND</h1>
            ) : film ? (
              <Row>
                <Col className="d-flex flex-column align-items-start">
                  <img
                    className="my-4"
                    style={{
                      height: "500px",
                      width: "350px",
                      objectFit: "cover",
                    }}
                    src={film.Poster}
                    alt="film"
                  />
                  <h2 style={{ textAlign: "start" }}>{film.Title}</h2>
                  <p style={{ textAlign: "start" }} className="mb-0">
                    Year: {film.Year}
                  </p>
                  <p style={{ textAlign: "start" }} className="text-muted">
                    Type: {film.Type}
                  </p>
                </Col>
              </Row>
            ) : (
              <h1>LOADING...</h1>
            )}
          </Col>
          <Col>
            <div className="get-pdf-btn-div">
              <Button variant="secondary">Get PDF</Button>
            </div>
            {typeof comment === "undefined" ? (
              <h1>404 - Comment NOT FOUND</h1>
            ) : comment ? (
              <Row>
                <Col className="pl-0 mt-4 d-flex flex-column align-items-start">
                  <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
                    <h3>Comments</h3>
                    {comment.map(c => (
                      <li className="my-3" key={c.elementId}>
                        <p>
                          <span className="text-muted pr-2">Comment:</span>
                          {c.comment}{" "}
                          <span className="text-muted pl-5 pr-2">Rate:</span>
                          {c.rate}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div style={{ paddingLeft: "10px" }}>
                    <NewReview />
                  </div>
                </Col>
              </Row>
            ) : (
              <h1>LOADING...</h1>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OwnDetails;
