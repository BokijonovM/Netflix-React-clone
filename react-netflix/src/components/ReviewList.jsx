import React, { Component } from 'react'

export default class ReviewList extends Component {

    state = {
        commentList: []
    }



    componentDidMount = async () => {
        let res = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.movieId, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjUwNTQ5ODIsImV4cCI6MTYyNjI2NDU4Mn0.JwwVnNEQqYHceQ2fscSxdyITJxc4U7GeQFaHsd0Vs0Y",
            }
        })
        let comments = await res.json()

        this.setState({
            commentList: [...comments]
        })
    }

    render() {
        return (
            <div className="mb-2 px-2">

                {this.state.commentList.map(comment => (
                    <div className="my-3" key={comment.elementId}>
                        <p className="m-0"> Author: {comment.author}</p>
                        <p className="m-0"> Comment: {comment.comment}</p>
                        <p className="m-0">{comment.createdAt}</p>


                    </div>))}
            </div>
        )
    }
}
