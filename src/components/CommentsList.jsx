import React, { Component } from 'react';
import {ListGroup, Badge} from 'react-bootstrap'


class CommentsList extends React.Component {
    state = {
        comments:[]
    }

    ComponentDidMount = async (event) => {
        event.preventDefault()
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.id, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzk2NjI1MjgsImV4cCI6MTY0MDg3MjEyOH0.M_W7mM03N1yeADR5Q0nbGPMaXiMh73U1VxH4uhVI160"
                }
            })
            let data = await response.json()
            this.setState({comments:data})
        } catch (error) {
            console.log(error)
        }
    }


    render() { 
        return (
        <>
            {this.state.comments > 0 && (
                <ListGroup>
                    {this.state.comments.map(comment => 
                    <ListGroup.Item><Badge bg="warning" text="dark">
                    {comment.rate}
                 </Badge> {comment.comment}</ListGroup.Item>)}
                    
              </ListGroup>
            )}
        </>);
    }
}
 
export default CommentsList;