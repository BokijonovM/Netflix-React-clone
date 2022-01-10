import { Col, Container, Row } from 'react-bootstrap'
import React, { Component } from 'react'
import Section from './components/Section'
import CommentArea from './components/CommentArea'

export default class MiinContent extends Component {


    render() {
        return (
            <Container fluid>
                <Row>

                    <Col md={9} >
                        <div>
                            <Section heading="Harry Potter" title="Harry Potter" />
                            <Section heading="Marvel" title="Marvel" />
                            <Section heading="Lord of the Rings" title="Lord of the Rings" />
                            <Section heading="Horror" title="Horror" />
                        </div>
                    </Col>
                    <Col md={3}>
                        {/* <CommentArea id="commentArea" book={this.state.displayedBook} /> */}
                        <CommentArea />

                    </Col>

                </Row>
            </Container>
        )
    }
}