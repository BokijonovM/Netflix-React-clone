import React from 'react';
import { Component } from "react"
import { Form, Button } from 'react-bootstrap';


class AddComment extends Component {
    state = {
        comments: {
            comment: "",
            rate: "",
            elementId: this.props.id
        }
    }

    handleInput = (property, value) => {
        this.setState({
            comments: {
                ...this.state.comments,
                [property]: value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
                method: "POST",
                body: JSON.stringify(this.state.comments),
                headers: {
                    "Content-Type": "application/JSON",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzk2NjI1MjgsImV4cCI6MTY0MDg3MjEyOH0.M_W7mM03N1yeADR5Q0nbGPMaXiMh73U1VxH4uhVI160"
                }
            })
            let data = await response.json()
        } catch (error) {
            console.log(error)
        }
    }



    render() {
        return (

            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} value={this.state.comments.comment}
                        onChange={e => this.handleInput("comment", e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Rate the book</Form.Label>
                    <Form.Control type="number" placeholder="Rating" min="1" max="5" value={this.state.comments.rate}
                        onChange={e => this.handleInput("rate", e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Button variant="primary" className="m-2"> Submit</Button>
                </Form.Group>
            </Form>
        );
    }
}

export default AddComment;