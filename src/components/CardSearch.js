import React, { Component } from 'react'
import { Card, } from 'react-bootstrap'
import './style.css'


export default class CardSearch extends Component {
    state = {
        showPrice: null,
        btnColor: 'primary',
        cardClass: "px-1 py-4 m-0 border-0 w-100 bg-transparent",
        isClicked: false
    }

    commentsDisplay = () => {
        this.setState({
            showPrice: null,
            btnColor: 'primary',
            cardClass: "px-1 py-4 mb-4 m-0 border-0 w-100 bg-transparent",
            isClicked: !this.state.isClicked

        })
    }
    // onDoubleClickF = () => {
    //     this.setState({
    //         btnColor: 'primary',
    //         cardClass: "px-1 py-4 m-0 border-0 w-100 bg-transparent",
    //         padding: "0px"
    //     })
    // }


    render() {
        return (
            <Card className={this.state.cardClass} style={{maxWidth:"18rem"}}>
                <Card.Img onClick={(e) => this.commentsDisplay()} className="img-poster align-self-center" variant="top" src={this.props.movie.Poster} />
                <div className="position-relative">
                    <Card.Body className="d-flex flex-column pb-0 pt-2 px-0 justify-content-between w-100 position-absolute">
                        {this.state.isClicked && <Card.Title className="mb-2 px-2"> <h6>{this.props.movie.Title}</h6> <h6>{this.props.movie.imdbID}</h6></Card.Title>}
                    </Card.Body>
                </div>
                
            </Card>
        )
    }
}
