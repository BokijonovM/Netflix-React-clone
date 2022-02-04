import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

function NewFilm() {
  const [Title, setTitle] = useState("");
  const [Year, setYear] = useState("");
  const [Type, setTypeMovie] = useState("Horror");
  const [Poster, setPoster] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const newMovie = {
      Title,
      Year,
      Type,
      Poster,
    };
    try {
      const response = await fetch(process.env.REACT_APP_OWN_MOVIE + "movies", {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();
        console.log("New Movie Data:", data);
      } else {
        console.log("Posting Failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form className="add-new-form" onSubmit={handleSubmit}>
        <div className="d-flex">
          <Form.Group controlId="blog-title" className="mt-3">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              value={Title}
              onChange={e => setTitle(e.target.value)}
              size="lg"
              placeholder="Title"
            />
          </Form.Group>
          <Form.Group controlId="blog-year" className="mt-3">
            <Form.Label>Movie Year</Form.Label>
            <Form.Control
              value={Year}
              onChange={e => setYear(e.target.value)}
              size="lg"
              placeholder="Year"
            />
          </Form.Group>
        </div>
        <div className="d-flex">
          <Form.Group controlId="blog-type" className="mt-3">
            <Form.Label>Movie Type</Form.Label>
            <Form.Control
              size="lg"
              as="select"
              value={Type}
              onChange={e => setTypeMovie(e.target.value)}
            >
              <option>Action</option>
              <option>Comedy</option>
              <option>Romance</option>
            </Form.Control>
          </Form.Group>

          <Form.Group
            controlId="blog-poster"
            className="mt-3 author-form-group"
          >
            <Form.Label>Movie Poster</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Poster link"
              value={Poster}
              onChange={e => setPoster(e.target.value)}
            />
          </Form.Group>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewFilm;
