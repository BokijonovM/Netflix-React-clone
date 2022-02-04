import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SingleOwnMovie from "./SingleOwnMovie";
import Loading from "./Loading";

const OwnMovie = () => {
  const [ownFilm, setOwnFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOwnMovie = async () => {
      try {
        let res = await fetch(process.env.REACT_APP_OWN_MOVIE + "movies");

        if (res.ok) {
          let data = await res.json();
          setOwnFilm(data);
          setIsLoading(false);
        } else {
          console.log("Own Film Fetch error!");
        }
      } catch (error) {
        // console.log(error);
      }
    };
    fetchOwnMovie();
  }, []);
  return (
    <div>
      <Container className="bodySectionBG px-4" fluid>
        <h4 className="mb-2 mt-2">Backend Movies</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 px-3 row__posters">
          {isLoading && <Loading />}

          {ownFilm.map(film => {
            return <SingleOwnMovie film={film} key={film.id} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default OwnMovie;
// return <SingleOwnMovie film={film} key={film.id} />;
