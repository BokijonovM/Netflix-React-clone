import { Component } from 'react'
import { Card } from 'react-bootstrap'
import Loading from './Loading'
import AddComment from './AddComment'
import CommentList from './CommentsList'

export default class CommentArea extends Component {
    state = {
        commentList: [],
        isLoading: true,
        errorHandle: false,
        movieTitle: 'Trending...'
    }

    componentDidMount = () => {
        this.getComments()
    }

    getComments = async () => {
        try {

            let commentsRes = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.movie.imdbID, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDE4MjAzMTYsImV4cCI6MTY0MzAyOTkxNn0.QvedsvE9IU4Q5gdIA4tTz8ZM2S62dDJvq2GVMZKUYbE",
                }
            })

            if (commentsRes.ok) {

                let comments = await commentsRes.json()
                this.setState({
                    commentList: [...comments],
                    isLoading: false,
                    remainingComments: comments.length
                })
            } else {
                this.setState({
                    commentList: [],
                    isLoading: false,
                    errorHandle: true

                })

            }

        } catch (err) {

        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.movie.title !== prevProps.movie.title) {
            this.getComments()
            this.setState({
                commentList: [...this.state.commentList],
                isLoading: false,
                movieTitle: this.props.movie.title,
                errorHandle: false,
            })
        }
    }
    render() {
        return (
            <>
                <h4 className="mb-n2 mt-2">
                    Movies
                </h4>
                <Card className='mt-4'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <h2 className="my-3">{this.state.movieTitle}</h2>
                    {this.state.isLoading && (<Loading></Loading>)}
                    {this.state.remainingComments ?
                        (this.state.commentList.map(comment => <CommentList getNewComments={this.getComments} key={comment._id} reviewInfo={comment}></CommentList>))
                        : (<p className="mt-3 text-center">No comments to display</p>)}

                    <AddComment getNewComments={this.getComments} movie={this.props.movie}></AddComment>


                </Card>
            </>
        )
    }
}