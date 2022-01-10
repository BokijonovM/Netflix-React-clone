import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'


export default class AddComment extends Component {

    state = {
        userReview1: {
            comment: '',
            rate: undefined,
            elementId: this.props.movie.imdbID
        }

    }


    inputHandler = (key, value) => {
        this.setState({
            userReview1: {
                ...this.state.userReview1,
                [key]: value
            }
        })

    }
    getRate = (newRating) => {
        this.setState({
            userReview1: {
                ...this.state.userReview1,
                rate: newRating
            }
        })

    }

    sendForm = async (e) => {
        e.preventDefault()
        await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method: 'POST',
            body: JSON.stringify(this.state.userReview1),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzk2NjI1MjgsImV4cCI6MTY0MDg3MjEyOH0.M_W7mM03N1yeADR5Q0nbGPMaXiMh73U1VxH4uhVI160",
                "Content-Type": "application/json"
            }
        })

        this.setState({
            userReview1: {
                ...this.state.userReview1,
                comment: '',
                rate: undefined

            }
        })
        await this.props.getNewComments()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.movie.imdbID !== prevProps.movie.imdbID) {
            this.setState({
                userReview1: {
                    ...this.state.userReview1,
                    elementId: this.props.movie.imdbID
                }
            })
        }
    }



    render() {
        return (
            <div className="ml-2">
                <h2 className="px-4 ml-2 align-items-center">{this.props.Title}</h2>
                <Form onSubmit={this.sendForm} className="justify-content-center flex-column" inline>
                    <Form.Group className="mb-3 d-flex flex-column justify-content-center" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Leave a comment</Form.Label>
                        <Form.Control onChange={(e) => this.inputHandler('comment', e.target.value)} value={this.state.userReview1.comment} required as="textarea" rows={4} style={{
                            width: "300px"
                        }} />
                    </Form.Group>
                    <div className="d-flex mb-4">
                        <StarRatings
                            rating={this.state.userReview1.rate}
                            starRatedColor="yellow"
                            starHoverColor="yellow"
                            starEmptyColor="rgb(129 129 129)"
                            changeRating={this.getRate}
                            numberOfStars={5}
                            name='rating'
                            starDimension="26px"
                            starSpacing="6px"
                            required
                        />
                    </div>
                    <Button type="submit" variant="info">Add a comment</Button>
                </Form>

            </div>
        )
    }
}
