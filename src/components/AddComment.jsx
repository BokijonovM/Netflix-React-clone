import React from "react";
import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comments: {
      comment: "",
      rate: "",
      elementId: this.props.id,
    },
  };

  handleInput = (property, value) => {
    this.setState({
      comments: {
        ...this.state.comments,
        [property]: value,
      },
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      let response = await fetch(
        process.env.REACT_APP_STRIVE_API + "api/comments/" + this.props.id,
        {
          method: "POST",
          body: JSON.stringify(this.state.comments),
          headers: {
            "Content-Type": "application/JSON",
            Authorization: `Bearer ${process.env.REACT_APP_COMMENT_AUTORIZATION}`,
          },
        }
      );
      let data = await response.json();
      this.setState({ comments: data });
      if (response.OK) {
        this.setState({
          comments: {
            comment: "",
            rate: "",
            elementId: this.props.id,
          },
        });
        alert("Comments Submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={2}
            value={this.state.comments.comment}
            onChange={e => this.handleInput("comment", e.target.value)}
            placeholder="Add Comment"
          />
        </Form.Group>
        <Form.Check
          inline
          label="2"
          name="group"
          type="radio"
          value="2"
          id="inline-radio-2"
          onClick={e => this.handleInput("rate", e.target.value)}
        />
        <Form.Check
          inline
          label="1"
          name="group"
          type="radio"
          value="1"
          id="inline-radio-1"
          onClick={e => this.handleInput("rate", e.target.value)}
        />
        <Form.Check
          inline
          label="3"
          name="group"
          type="radio"
          value="3"
          id="inline-radio-3"
          onClick={e => this.handleInput("rate", e.target.value)}
        />
        <Form.Check
          inline
          label="4"
          name="group"
          type="radio"
          value="4"
          id="inline-radio-4"
          onClick={e => this.handleInput("rate", e.target.value)}
        />
        <Form.Check
          inline
          label="5"
          name="group"
          type="radio"
          value="5"
          id="inline-radio-5"
          onClick={e => this.handleInput("rate", e.target.value)}
        />

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Button
            variant="primary"
            className="m-2"
            onClick={event => this.handleSubmit}
          >
            {" "}
            Submit
          </Button>
        </Form.Group>
      </div>
    );
  }
}

export default AddComment;
