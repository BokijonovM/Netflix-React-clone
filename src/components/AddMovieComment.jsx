import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'
// import { useState, useEffect } from 'react'

export default class AddMovieComment extends Component {

    state = {
        userReview1: {
            comment: '',
            rate: undefined,
            elementId: this.props.movieID
        }
    // state = {
    //     userReview1: {
    //         comment: '',
    //         rate: undefined,
    //         elementId: this.props.book.asin
    //     }

    }
    // }
    // const [userReview1, setUserReview1] = useState({
    //     comment: '',
    //     rate: undefined,
    //     elementId: asin
    // })


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
    // useEffect(() => {
    //     sendForm()
    // }, [asin])

    sendForm = async (e) => {
        e.preventDefault()
    // componentDidMount() {
    //     this.sendForm()
    // }
        await fetch('https://striveschool-api.herokuapp.com/api/comments/'+ this.props.movieID, {
            method: 'POST',
            body: JSON.stringify(this.state.userReview1),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDE4MjAzMTYsImV4cCI6MTY0MzAyOTkxNn0.QvedsvE9IU4Q5gdIA4tTz8ZM2S62dDJvq2GVMZKUYbE",
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
        // await userReview1.getNewComments()
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.book.asin !== prevProps.book.asin) {
    //         this.setState({
    //             userReview1: {
    //                 ...this.state.userReview1,
    //                 elementId: this.props.book.asin
    //             }
    //         })
    //     }
    // }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.movieID !== prevProps.movieID) {
            this.setState({
                userReview1: {
                    ...this.state.userReview1,
                    elementId: this.props.movieID
                }
            })
        }
    }



    render() {
        return (
            <div className="ml-2">
                <h2 className="px-4 ml-2 align-items-center">{this.props.title}</h2>
                <Form onSubmit={this.sendForm} className="justify-content-center flex-column" inline>
                    <Form.Group className="mb-3 d-flex flex-column justify-content-center" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Leave a comment</Form.Label>
                        <Form.Control onChange={(e) => this.inputHandler('comment', e.target.value)} value={this.state.userReview1.comment} required as="textarea" rows={4} style={{
                            width: "250px"
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