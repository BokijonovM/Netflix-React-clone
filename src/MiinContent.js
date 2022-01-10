import { Col, Container, Row } from 'react-bootstrap'
import React, { Component } from 'react'
import Section from './components/Section'
import CommentArea from './components/CommentArea'

export default class MiinContent extends Component {
    state = {
        displayedMovie: this.props.movie
    }

    getUserSelectedMovie = (bookSelected) => {
        this.setState({
            displayedMovie: bookSelected
        })
    }


    render() {
        return (
            <Container fluid>
                <Row>

                    <Col md={9} >
                        <div>
                            <Section getUserSelectedMovie={this.getUserSelectedMovie} heading="Harry Potter" title="Harry Potter" />
                            <Section getUserSelectedMovie={this.getUserSelectedMovie} heading="Marvel" title="Marvel" />
                            <Section getUserSelectedMovie={this.getUserSelectedMovie} heading="Lord of the Rings" title="Lord of the Rings" />
                            <Section getUserSelectedMovie={this.getUserSelectedMovie} heading="Horror" title="Horror" />
                        </div>
                    </Col>
                    <Col md={3}>
                        {/* <CommentArea id="commentArea" book={this.state.displayedBook} /> */}
                        <CommentArea id="commentArea" book={this.state.displayedMovie} />

                    </Col>

                </Row>
            </Container>
        )
    }
}