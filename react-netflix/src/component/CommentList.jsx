import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'

class CommentList extends Component{
    state={
        selected:false,
        comments:[],
        isLoading:true
    }
    render(){
             return(
            <ListGroup.Item as="li" active>
                        {this.props.comment.rate} - {this.props.comment.comment} <BsTrash onClick={this.handleDelete}/>
                    </ListGroup.Item>
                    
                        )
                        //
                        
                    
                     
                            ComponentDidMount = async() =>{
                                try {
                                    let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.id, {
                                    method:"GET",   
                                    headers: { 
                                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzk2NjI1MjgsImV4cCI6MTY0MDg3MjEyOH0.M_W7mM03N1yeADR5Q0nbGPMaXiMh73U1VxH4uhVI160"
                                    }
                                        })
                    
                                   let data = await response.json()
                                   this.setState({comments:data})  
                                   this.setState({isLoading:false})  
                                   
                                } catch (error) {
                                    console.log(error)
                                }
                            }
                        // 
                        handleDelete = async() =>{
                            
                            try {
                                let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.comment.elementId, {
                                    Method:"DELETE",
                                    header:{
                                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzk2NjI1MjgsImV4cCI6MTY0MDg3MjEyOH0.M_W7mM03N1yeADR5Q0nbGPMaXiMh73U1VxH4uhVI160"
                                    }
                                })
                            } catch (error) {
                                
                            }
                            
                        }
                    }
}

export default CommentList;