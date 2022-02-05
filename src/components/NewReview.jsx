import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function NewReview() {
  const params = useParams();

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("1");
  const [elementId, setElementId] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    const newReviewMovie = {
      comment,
      rate,
      elementId,
    };
    try {
      let res = await fetch(
        process.env.REACT_APP_OWN_MOVIE +
          "movies/" +
          params.movieID +
          "/review",
        {
          method: "POST",
          body: JSON.stringify(newReviewMovie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res.ok) {
        let data = await res.json();
        console.log("New Review:", data);
        setElementId(params.movieID);
      } else {
        console.log("New review failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="d-flex">
          <Form.Group controlId="blog-type" className="mt-3">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              size="lg"
              as="select"
              value={rate}
              onChange={e => setRate(e.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group
            controlId="blog-comment"
            className="mt-3 author-form-group"
          >
            <Form.Label>Comment</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Write Comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          </Form.Group>
        </div>
      </Form>
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
}

export default NewReview;
