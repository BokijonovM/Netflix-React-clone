import { Component, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import "./style.css";
import { Link } from "react-router-dom";

export default class CardSearch extends Component {
  state = {
    showPrice: null,
    btnColor: "primary",
    cardClass: "px-1 py-4 m-0 border-0 w-100 bg-transparent",
    isClicked: false,
    showComments: false,
  };

  commentsDisplay = () => {
    this.setState({
      showPrice: null,
      btnColor: "primary",
      cardClass: "px-1 py-4 mb-4 m-0 border-0 w-100 bg-transparent",
      isClicked: !this.state.isClicked,
    });
  };
  // onDoubleClickF = () => {
  //     this.setState({
  //         btnColor: 'primary',
  //         cardClass: "px-1 py-4 m-0 border-0 w-100 bg-transparent",
  //         padding: "0px"
  //     })
  // }
  setShowComments = show => {
    this.setState({ showComments: show });
  };

  showComments = () => this.setShowComments(true);
  hideComments = () => this.setShowComments(false);

  render() {
    return (
      <Card className={this.state.cardClass} style={{ maxWidth: "18rem" }}>
        {/* onClick={this.showComments} */}
        <Link to={"/details/" + this.props.movie.imdbID}>
          <Card.Img
            style={{ height: "300px", width: "205px" }}
            className="img-poster align-self-center"
            variant="top"
            src={this.props.movie.Poster}
          />
        </Link>

        <div className="position-relative">
          <Card.Body className="d-flex flex-column pb-0 pt-2 px-0 justify-content-between w-100 position-absolute">
            {this.state.isClicked && (
              <Card.Title className="mb-2 px-2">
                {" "}
                <h6>{this.props.movie.Title}</h6>{" "}
                <h6>{this.props.movie.imdbID}</h6>
              </Card.Title>
            )}
          </Card.Body>
        </div>
        {this.state.showComments && (
          <Modal show={true} onHide={this.hideComments}>
            <Modal.Header closeButton>
              <Modal.Title>Comments of {this.props.movie.Title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <CommentsList id={this.props.movie.imdbId} />
              <AddComment id={this.props.movie.imdbId} />
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.hideComments} variant="secondary">
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Card>
    );
  }
}
