import React, { Component } from 'react';
import CommentListItem from './commentListItem.jsx'
import {ListGroup} from 'react-bootstrap'

class CommentList extends Component{
    state={

    }
    render(){
    return(
        <ListGroup as="ul">
           
        {this.props.comments.map(comment => <CommentListItem comment={comment}/>)}
            
    </ListGroup>
    )
    }
}

export default CommentList