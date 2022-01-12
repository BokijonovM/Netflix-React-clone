import React, { Component } from 'react';
import CommentList from './CommentList.jsx'
import {ListGroup} from 'react-bootstrap'

class CommentListItem extends Component{
    state={

    }
    render(){
    return(
        <ListGroup className="ul">
           
        {this.props.comments.map(comment => <CommentList comment={comment}/>)}
            
    </ListGroup>
    )
    }
}

export default CommentList